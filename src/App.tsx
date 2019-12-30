import React, { useCallback, useState } from 'react';
import { Layout } from './components/layout';
import { userApi } from './services/api/user';
import { IUser, IUserRepository } from './services/api/user/interfaces';
import { UserRepos } from './components/user-repos';
import { UserInfo } from './components/user-info';
import { SearchInput } from './components/search-input';

interface IUserState {
  isLoading: boolean;
  error?: string;
  user?: IUser;
}

interface IReposState {
  isLoading: boolean;
  error?: string;
  repos?: IUserRepository[];
}

const userInitialState = { isLoading: false, error: undefined, user: undefined };
const reposInitialState = { isLoading: false, error: undefined, repos: undefined };

const App: React.FC = () => {
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

  return (
    <Layout title="Github search" header={<SearchInput onChange={handleSearch} name="Search" label="Find user" />}>
      <>
        <UserInfo user={userState.user} isLoading={userState.isLoading} error={userState.error} />
        {userState.user && (
          <UserRepos repos={reposState.repos} isLoading={reposState.isLoading} error={reposState.error} />
        )}
      </>
    </Layout>
  );
};

export default App;
