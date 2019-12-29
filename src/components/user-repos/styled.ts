import css from '@emotion/css';
import { lighten } from 'polished';
import { keyframes } from '@emotion/core';

export const title = css`
  margin: 0;
  margin-bottom: 10px;
`;

export const container = css`
  align-items: flex-start;
`;

export const link = css`
  color: inherit;
`;

export const shine = keyframes`
  0% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
`;

export const loadingAnimation = (color = '#dde2e6', lightenAmount = 0.05) => css`
  background-image: linear-gradient(
    90deg,
    ${lighten(lightenAmount, color)} 25%,
    ${color} 37%,
    ${lighten(lightenAmount, color)} 63%
  );
  animation: ${shine} 1.4s ease infinite;
  background-size: 400% 100%;
`;

export const listItemDummy = css`
  ${loadingAnimation()}
  height: 14px;
  margin-top: 5px;
  width: 200px;
`;
