import React from 'react';
import { title, link, container } from './styled';
import { IUserRepository } from '../../services/api/user/interfaces';
import { List, ListItem } from '../list';
import { ContentBox } from '../content-box';
import UserReposSkeleton from './skeleton';

interface IProps {
  repos?: IUserRepository[];
  isLoading?: boolean;
  error?: string;
}

const UserRepos: React.FC<IProps> = ({ repos, isLoading, error }) => {
  return (
    <ContentBox
      cssStyles={container}
      isLoading={isLoading}
      error={error}
      isEmpty={!repos || repos.length === 0}
      loadingState={<UserReposSkeleton />}
    >
      <h4 css={title}>Most popular repositories:</h4>
      <List>
        {repos &&
          repos.map(repo => (
            <ListItem key={repo.id}>
              <a css={link} href={repo.url}>
                {repo.name}
              </a>
              ({repo.starsCount})
            </ListItem>
          ))}
      </List>
    </ContentBox>
  );
};

export default UserRepos;
