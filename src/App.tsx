import React from 'react';
import SearchInput from './components/search';
import Layout from './components/layout';
import { userApi } from './services/api/user';

const App: React.FC = () => {
  userApi.findUser('kamilmateusiak').then(response => console.log(response));

  return (
    <Layout
      header={<SearchInput onChange={() => {}} value='' name='' label='Find user' />}
    >
      <div>asdas</div>
    </Layout>
  );
}

export default App;
