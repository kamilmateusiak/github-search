import React from 'react';
import { appBackground, container } from './styled';

interface IProps {
  header: React.ReactNode;
}

const Layout: React.FC<IProps> = props => {
  return (
    <div css={appBackground}>
      <div css={container}>
        <header>
          {props.header}
        </header>
        <main>
          {props.children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
