import apiClient, { IRequestResult } from '../api-client';
import { IUser, IRawUser, IUserRepository, IRawUserRepository } from './interfaces';
import { deserializeUser, deserializeUserRepos } from './user-serializer';

const userApi = {
  async findUser(login: string): Promise<IRequestResult<IUser>> {
    if (!login) {
      return {
        result: null,
        error: new Error('Please provide user login')
      };
    }

    const path = `/users/${login}`;

    const requestResult = await apiClient.get<IRawUser>(path);

    return {
      ...requestResult,
      result: deserializeUser(requestResult.result)
    };
  },

  async getMostPopularRepos(login: string): Promise<IRequestResult<IUserRepository[]>> {
    if (!login) {
      return {
        result: null,
        error: new Error('Please provide user login')
      };
    }

    const path = `/search/repositories?q=user:${login}&sort=stars&order=desc&per_page=3`;

    const requestResult = await apiClient.get<{
      items: IRawUserRepository[];
    }>(path);

    return {
      ...requestResult,
      result: deserializeUserRepos(requestResult.result && requestResult.result.items)
    };
  }
};

export default userApi;
