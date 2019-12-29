import React from 'react';
import { listItemDummy, title } from './styled';
import { List } from '../list';

const UserReposSkeleton: React.FC = () => {
  return (
    <List>
      <h4 css={title}>Most popular repositories:</h4>
      <div css={listItemDummy} />
      <div css={listItemDummy} />
      <div css={listItemDummy} />
    </List>
  );
};

export default UserReposSkeleton;
