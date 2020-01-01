import React from 'react';
import { Layout } from './components/layout';
import { UserRepos } from './components/user-repos';
import { UserInfo } from './components/user-info';
import { SearchInput } from './components/search-input';
import { useSearchUser } from './hooks';

const App: React.FC = () => {
  const { userState, reposState, handleSearch } = useSearchUser();

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
