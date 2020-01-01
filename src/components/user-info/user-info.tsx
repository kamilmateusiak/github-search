import React from 'react';
import { avatar, name, description } from './styled';
import { IUser } from '../../services/api/user/interfaces';
import { ContentBox } from '../content-box';
import UserInfoSkeleton from './skeleton';

interface IProps {
  user: Maybe<IUser>;
  isLoading?: boolean;
  error: Maybe<string>;
}

const UserInfo: React.FC<IProps> = ({ user, error, isLoading }) => {
  return (
    <ContentBox isLoading={isLoading} error={error} isEmpty={!user} loadingState={<UserInfoSkeleton />}>
      {user && (
        <>
          {user.avatarUrl && (
            <a href={user.url}>
              <img css={avatar} src={user.avatarUrl} alt={`${user.name} avatar`} />
            </a>
          )}
          <h5 css={name}>{user.name || user.login}</h5>
          {user.description && <p css={description}>{user.description}</p>}
        </>
      )}
    </ContentBox>
  );
};

export default UserInfo;
