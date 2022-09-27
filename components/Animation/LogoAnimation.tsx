import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const LogoAnimation = () => {
  return (
    <Container>
      <svg>
        <Path
          fill='white'
          stroke='black'
          stroke-width='10'
          d='M 10 0 L 0 20 L 10 40 L 35 40 L 45 20 l -10 -20 H 10'
        />
      </svg>
    </Container>
  );
};

export default LogoAnimation;

const Container = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid blue;

  svg {
    width: 100%;
    height: 100%;
    border: 2px solid red;
  }
`;

const dash = keyframes`
  /* from {
    stroke-dashoffset: 822;
  }
  to {
    stroke-dashoffset: 0;
  } */
`;
const Path = styled.path`
  color: black;
  /* stroke-dasharray: 1000; */
  /* stroke-dashoffset: 1000; */
  stroke-dashoffset: 0;
  animation: ${dash} 5s linear alternate infinite;
`;
