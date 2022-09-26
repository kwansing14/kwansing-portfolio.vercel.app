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
    <span ref={ref}>
      <Wrapper beginAnimation={isVisible} delay={delay || 1}>
        {children}
      </Wrapper>
    </span>
  );
};

export default FadeUpWrapper;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.span<StyledProps>`
  display: ${({ beginAnimation }) => (beginAnimation ? 'auto' : 'none')};
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${({ delay }) => delay}00ms;
  white-space: pre-wrap;
`;
