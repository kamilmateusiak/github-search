import React from 'react';
import { avatar, name, description, dummy, nameDummy, descriptionDummy } from './styled';

const UserInfoSkeleton: React.FC = () => {
  return (
    <>
      <div css={[avatar, dummy]} />
      <div css={[name, nameDummy, dummy]} />
      <div css={[description, descriptionDummy, dummy]} />
    </>
  );
};

export default UserInfoSkeleton;
