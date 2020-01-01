import { useState, useCallback } from 'react';
import { IUserRepository, IUser } from '../services/api/user/interfaces';
import { userApi } from '../services/api/user';

interface IUserState {
  isLoading: boolean;
  error: Maybe<string>;
  user: Maybe<IUser>;
}

interface IReposState {
  isLoading: boolean;
  error: Maybe<string>;
  repos: Maybe<IUserRepository[]>;
}

export const userInitialState = { isLoading: false, error: null, user: null };
export const reposInitialState = { isLoading: false, error: null, repos: null };

interface IHookApi {
  userState: IUserState;
  reposState: IReposState;
  handleSearch: (value: string) => void;
}

function useSearchUser(): IHookApi {
  const [userState, setUserState] = useState<IUserState>(userInitialState);
  const [reposState, setReposState] = useState<IReposState>(reposInitialState);

  const handleSearch = useCallback(
    (value: string) => {
      if (value === '') {
        setUserState(userInitialState);
        setReposState(reposInitialState);
        return;
      }

      setUserState({ ...userInitialState, isLoading: true });
      setReposState({ ...reposInitialState, isLoading: true });

      userApi.findUser(value).then(userFetchResponse => {
        if (userFetchResponse.error) {
          setUserState({ ...userInitialState, error: userFetchResponse.error.message });
          setReposState({ ...reposInitialState });
          return;
        }

        if (userFetchResponse.result) {
          setUserState({ ...userInitialState, user: userFetchResponse.result });

          userApi.getMostPopularRepos(value).then(reposFetchResponse => {
            if (reposFetchResponse.error) {
              setReposState({ ...reposInitialState, error: reposFetchResponse.error.message });
              return;
            }

            if (reposFetchResponse.result) {
              setReposState({ ...reposInitialState, repos: reposFetchResponse.result });
            }
          });
        }
      });
    },
    [setUserState, setReposState]
  );

  return {
    userState,
    reposState,
    handleSearch
  };
}

export default useSearchUser;
