import React from 'react';
import SearchInput from './components/search';
import Layout from './components/layout';

const App: React.FC = () => {
  return (
    <Layout
      header={<SearchInput onChange={() => {}} value='' name='' label='Find user' />}
    >
      <div>asdas</div>
    </Layout>
  );
}

export default App;
