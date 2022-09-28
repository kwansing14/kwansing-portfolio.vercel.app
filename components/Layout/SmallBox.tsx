import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Typewriter } from 'react-simple-typewriter';
import styles from '@root/styles';

const SmallBox = () => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setIndex(0);
    }, 2000);
  }, []);

  return (
    <Container zI={index}>
      <TopLeftBox />
      <TopRightBox />
      <BottomLeftBox />
      <BottomRightBox />
      <Intro>
        <Typewriter
          words={['', 'Welcome']}
          loop={1}
          cursor
          cursorStyle='_'
          typeSpeed={40}
          delaySpeed={1000}
        />
      </Intro>
    </Container>
  );
};

export default SmallBox;

const endPoint = '16px';
const startPoint = 'calc(50% - 10px)';

const bgFrame = keyframes`
  from {
    background: black
  }
  to {
    background: none;
  }
`;

const blink = keyframes`
  0% { opacity: 0; }
  10% { opacity: 1; }
  20% { opacity: 0; }
  50% { opacity: 1; }
  75% { opacity: 0; }
  100% { opacity: 1; }
`;

const blinkOff = keyframes`
  0% { opacity: 1; }
  25% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const Container = styled.div<{ zI: number }>`
  width: 100px;
  height: 100px;
  position: fixed;
  top: 80px;
  left: 0;
  height: calc(100vh - 80px);
  width: 100%;
  background: black;
  animation: ${bgFrame} 0.5s linear forwards;
  animation-delay: 2.5s;
  z-index: ${({ zI }) => zI};

  @media ${styles.sizes.m} {
    top: 60px;
    height: calc(100vh - 60px);
  }
`;

const topLeft = keyframes`
  0% {
    top: ${startPoint};
    left: ${startPoint};
  }

  100% {
    top: calc(50% - 20px);
    left: calc(50% - 60px);
  }
`;

const topLeftExpand = keyframes`
  from {
    top: calc(50% - 20px);
    left: calc(50% - 60px);
  }
  to {
    top: ${endPoint};
    left: ${endPoint};
  }
`;

const TopLeftBox = styled.div`
  width: 10px;
  height: 10px;
  border-top: 1px solid rgb(88, 88, 88);
  border-left: 1px solid rgb(88, 88, 88);
  position: absolute;
  top: ${startPoint};
  left: ${startPoint};
  opacity: 1;
  animation: ${blink} 0.3s linear 0.5s forwards, ${topLeft} 0.3s linear 1s forwards,
    ${topLeftExpand} 1s linear 2s forwards;
`;

const topRight = keyframes`
  0% {
    top: ${startPoint};
    right: ${startPoint};
  }

  100% {
    top: calc(50% - 20px);
    right: calc(50% - 60px);
  }
`;

const topRightExpand = keyframes`
  from {
    top: calc(50% - 20px);
    right: calc(50% - 60px);
  }
  to {
    top: ${endPoint};
    right: ${endPoint};
  }
`;

const TopRightBox = styled.div`
  width: 10px;
  height: 10px;
  border-top: 1px solid rgb(88, 88, 88);
  border-right: 1px solid rgb(88, 88, 88);
  position: absolute;
  top: ${startPoint};
  right: ${startPoint};
  opacity: 1;
  animation: ${blink} 0.3s linear 0.5s forwards, ${topRight} 0.3s linear 1s forwards,
    ${topRightExpand} 1s linear 2s forwards;
`;

const bottomLeft = keyframes`
  from {
    bottom: ${startPoint};
    left: ${startPoint};
  }
  to {
    bottom: calc(50% - 20px);
    left: calc(50% - 60px);
  }
`;

const bottomLeftExpand = keyframes`
  from {
    bottom: calc(50% - 20px);
    left: calc(50% - 60px);
  }
  to {
    bottom: ${endPoint};
    left: ${endPoint};
  }
`;

const BottomLeftBox = styled.div`
  width: 10px;
  height: 10px;
  border-bottom: 1px solid rgb(88, 88, 88);
  border-left: 1px solid rgb(88, 88, 88);
  position: absolute;
  bottom: ${startPoint};
  left: ${startPoint};
  animation: ${blink} 0.3s linear 0.5s forwards, ${bottomLeft} 0.3s linear 1s forwards,
    ${bottomLeftExpand} 1s linear 2s forwards;
`;

const bottomRight = keyframes`
  from {
    bottom: ${startPoint};
    right: ${startPoint};
  }
  to {
    bottom: calc(50% - 20px);
    right: calc(50% - 60px);
  }
`;

const bottomRightExpand = keyframes`
  from {
    bottom: calc(50% - 20px);
    right: calc(50% - 60px);
  }
  to {
    bottom: ${endPoint};
    right: ${endPoint};
  }
`;

const BottomRightBox = styled.div`
  width: 10px;
  height: 10px;
  border-bottom: 1px solid rgb(88, 88, 88);
  border-right: 1px solid rgb(88, 88, 88);
  position: absolute;
  bottom: ${startPoint};
  right: ${startPoint};
  animation: ${blink} 0.3s linear 0.5s forwards, ${bottomRight} 0.3s linear 1s forwards,
    ${bottomRightExpand} 1s linear 2s forwards;
`;

const Intro = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 100px;
  height: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  animation: ${blinkOff} 0.3s linear 2.2s forwards;
`;
