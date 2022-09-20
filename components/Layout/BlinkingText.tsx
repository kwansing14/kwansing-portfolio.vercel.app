import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import styles from '@root/styles';

interface StyleProp {
  delay: number;
}

const BlinkingText: NextPage<{ children: string }> = ({ children }) => {
  const splitText = (text: string) => {
    const splitText = text.split('');
    return (
      <>
        {splitText.map((x, index) => (
          <BlinkingSpan key={index} delay={index}>
            <b>{x}</b>
          </BlinkingSpan>
        ))}
      </>
    );
  };
  return <Title>{splitText(children)}</Title>;
};

export default BlinkingText;

const Title = styled.div`
  ${styles.blinkingTitle}
`;

const blinking = keyframes`
  0% {
    -webkit-text-fill-color: transparent;
  }
  25% {
    -webkit-text-fill-color: currentColor;
  }
  50% {
    -webkit-text-fill-color: transparent;
  }
  100% {
    -webkit-text-fill-color: currentColor;
  }
`;

const BlinkingSpan = styled.span<StyleProp>`
  animation: ${blinking} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: ${({ delay }) => delay / 10 + 1}s;
`;
