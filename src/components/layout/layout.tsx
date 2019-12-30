import React from 'react';
import { appBackground, container, header, title, content } from './styled';

interface IProps {
  title: string;
  header: React.ReactNode;
}

const Layout: React.FC<IProps> = props => {
  return (
    <div css={appBackground}>
      <header css={header}>
        <div css={container}>
          <h1 css={title}>{props.title}</h1>
          {props.header}
        </div>
      </header>
      <main css={content}>
        <div css={container}>{props.children}</div>
      </main>
    </div>
  );
};

export default Layout;
