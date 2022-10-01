import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useIntersecting } from '@root/customHooks/useIntersecting';

interface Props {
  children: React.ReactNode;
  delay?: number;
}

interface StyledProps {
  beginAnimation: boolean;
  delay: number;
}

const FadeUpWrapper: React.FC<Props> = ({ children, delay }) => {
  const ref = useRef(null);
  const [isVisible] = useIntersecting(ref);

  return (
    <Div ref={ref}>
      <Wrapper beginAnimation={isVisible} delay={delay || 1}>
        {children}
      </Wrapper>
    </Div>
  );
};

export default FadeUpWrapper;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    translate: 0 20px;

  }

  100% {
    opacity: 1;
    translate: 0 0;
  }
`;

const Wrapper = styled.div<StyledProps>`
  display: ${({ beginAnimation }) => (beginAnimation ? 'auto' : 'none')};
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${({ delay }) => delay}00ms;
  white-space: pre-wrap;
`;

const Div = styled.div`
  width: 100%;
`;
