import { css } from '@emotion/react';
// import { keyframes } from '@emotion/react';

export const container = css`
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 48px;
    max-width: 1400px;
    width: 100%;
  }
`;

interface SizesProp {
  l: string;
  m: string;
  s: string;
}

export const sizes: SizesProp = {
  l: '(max-width: 1260px)',
  m: '(max-width: 768px)',
  s: '(max-width: 480px)',
};

export const blinkingTitle = css`
  font-size: 64px;
  white-space: pre-line;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
  white-space: pre;
`;

export const titleFont = css`
  font-size: 56px;
  font-weight: 400;
  line-height: 72px;

  @media ${sizes.l} {
    font-size: 45px;
    line-height: 55px;
  }

  @media ${sizes.m} {
    font-size: 36px;
    line-height: 48px;
  }
`;

export const subTitleFont = css`
  font-size: 16px;
  color: #a4a2a2;

  @media ${sizes.l} {
    padding: 12px 0;
    font-size: 14px;
  }
`;

export const contentFont = css`
  font-size: 18px;
  font-weight: 400;
  line-height: 34px;
  white-space: pre-wrap;

  @media ${sizes.l} {
    font-size: 16px;
    line-height: 24px;
  }
`;
