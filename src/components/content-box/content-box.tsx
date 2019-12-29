import React from 'react';
import { container } from './styled';
import { SerializedStyles } from '@emotion/css';

interface IProps {
  isLoading?: boolean;
  error?: string;
  cssStyles?: SerializedStyles;
  isEmpty?: boolean;
  loadingState?: React.ReactNode;
}

const ContentBox: React.FC<IProps> = ({ cssStyles, isLoading, children, error, isEmpty, loadingState }) => {
  if (isLoading) {
    return <div css={[container, cssStyles]}>{loadingState || 'Loading'}</div>;
  }

  if (error) {
    return <div css={[container, cssStyles]}>{error}</div>;
  }

  if (isEmpty) {
    return <div css={[container, cssStyles]}>Empty</div>;
  }

  return <div css={[container, cssStyles]}>{children}</div>;
};

export default ContentBox;
