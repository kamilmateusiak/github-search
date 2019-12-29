import React from 'react';
import { listItem } from './styled';

const ListItem: React.FC = props => {
  return <li css={listItem}>{props.children}</li>;
};

export default ListItem;
