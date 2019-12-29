import css from '@emotion/css';
import { lighten } from 'polished';
import { keyframes } from '@emotion/core';

export const avatar = css`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 1px solid #e2e2e2;
`;

export const name = css`
  color: #414141;
  font-weight: normal;
  margin: 0;
  margin-top: 10px;
`;

export const nameDummy = css`
  height: 14px;
  width: 200px;
  margin: 0 auto;
  margin-top: 10px;
`;

export const description = css`
  color: #414141;
  margin: 0;
  margin-top: 10px;
`;

export const descriptionDummy = css`
  height: 14px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
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

export const dummy = css`
  ${loadingAnimation()}
`;
