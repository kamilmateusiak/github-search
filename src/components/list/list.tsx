import React from 'react';
import { list } from './styled';

const List: React.FC = props => {
  return <ul css={list}>{props.children}</ul>;
};

export default List;
