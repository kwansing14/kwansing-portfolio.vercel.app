import { css } from '@emotion/react';
// import { keyframes } from '@emotion/react';

const backgroundColor = '#101010';

interface SizesProp {
  xl: string;
  l: string;
  m: string;
  s: string;
}

const sizes: SizesProp = {
  xl: '(max-width: 1200px)',
  l: '(max-width: 1024px)',
  m: '(max-width: 768px)',
  s: '(max-width: 480px)',
};

export const container = css`
  height: 100vh;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: ${backgroundColor}; */
  background: none;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 88px;
    max-width: 1400px;
    width: 100%;
  }

  @media ${sizes.m} {
    > div {
      padding: 0 16px;
    }
  }
`;

const blinkingTitle = css`
  font-size: 64px;
  white-space: pre-line;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
  white-space: pre;
`;

const titleFont = css`
  font-size: 64px;
  line-height: 96px;
  font-weight: 800;
  color: white;

  @media ${sizes.l} {
    font-size: 48px;
    line-height: 72px;
  }

  @media ${sizes.m} {
    font-size: 36px;
    line-height: 54px;
  }
`;

const title2Font = css`
  font-size: 56px;
  line-height: 84px;
  font-weight: 800;
  color: white;

  @media ${sizes.l} {
    font-size: 40px;
    line-height: 60px;
  }

  @media ${sizes.m} {
    font-size: 32px;
    line-height: 48px;
  }
`;

const subTitleFont = css`
  font-size: 32px;
  line-height: 48px;
  color: #d3d3d3;

  @media ${sizes.l} {
    font-size: 24px;
  }
`;

const contentFont = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  white-space: pre-wrap;
  color: #959595;

  @media ${sizes.l} {
    font-size: 12px;
    line-height: 18px;
  }
`;

const systemFont = css`
  color: #a5a5a5;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 2px;

  @media ${sizes.m} {
    font-size: 8px;
    line-height: 12px;
    letter-spacing: 1px;
  }
`;

const styles = {
  backgroundColor: backgroundColor,
  container: container,
  blinkingTitle: blinkingTitle,
  titleFont: titleFont,
  title2Font: title2Font,
  subTitleFont: subTitleFont,
  contentFont: contentFont,
  systemFont: systemFont,
  sizes: sizes,
};

export default styles;
