import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import useSearchUser, { reposInitialState, userInitialState } from './use-search-user';
import apiClient from '../services/api/api-client';
import { rawUser } from '../../test/fixtures/user';
import { rawUserRepo } from '../../test/fixtures/user-repo';
import { deserializeUser, deserializeUserRepos } from '../services/api/user/user-serializer';

describe('HOOKS | useSearchUser', () => {
  it('should return initial states on init', () => {
    const { result } = renderHook(() => useSearchUser());
    const {
      current: { reposState, userState }
    } = result;
    expect(reposState).toEqual(reposInitialState);
    expect(userState).toEqual(userInitialState);
  });

  it('should send 2 requests to api on handleSearch call', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSearchUser());

    const axiosMock = new MockAdapter(apiClient.api);

    const userRequestMockResponse = { data: rawUser };
    const reposRequestMockResponse = {
      data: { items: [rawUserRepo] }
    };

    axiosMock.onGet(`/users/${rawUser.login}`).reply(200, userRequestMockResponse.data);
    axiosMock
      .onGet(`/search/repositories?q=user:${rawUser.login}&sort=stars&order=desc&per_page=3`)
      .reply(200, reposRequestMockResponse.data);

    await act(async () => {
      await result.current.handleSearch(rawUser.login);
    });

    expect(result.current.userState).toEqual({
      error: null,
      isLoading: false,
      user: deserializeUser(rawUser)
    });
    expect(result.current.reposState).toEqual({
      error: null,
      isLoading: false,
      repos: deserializeUserRepos([rawUserRepo])
    });
  });

  it('should not send request for repos and reset their value on handleSearch call if request for user failed', async () => {
    const { result } = renderHook(() => useSearchUser());

    const axiosMock = new MockAdapter(apiClient.api);

    const userRequestMockResponse = { data: rawUser };

    axiosMock.onGet(`/users/${rawUser.login}`).reply(404, userRequestMockResponse.data);

    await act(async () => {
      await result.current.handleSearch(rawUser.login);
    });

    expect(result.current.userState).toEqual({
      error: 'Request failed with status code 404',
      isLoading: false,
      user: null
    });
    expect(result.current.reposState).toEqual(reposInitialState);
  });
});
