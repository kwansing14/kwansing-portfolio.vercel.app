import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const SmallBox = () => {
  return (
    <Container>
      <TopLeftBox />
      <TopRightBox />
      <BottomLeftBox />
      <BottomRightBox />
      <Intro>Loading...</Intro>
    </Container>
  );
};

export default SmallBox;

const bgFrame = keyframes`
  from {
    background: black
  }
  to {
    background: none;
  }
`;

const Container = styled.div`
  width: 100px;
  height: 100px;
  position: fixed;
  top: 80px;
  left: 0;
  height: calc(100vh - 80px);
  width: 100%;
  background: black;
  /* animation: ${bgFrame} 1s linear forwards; */
  animation-delay: 5s;
`;

const blink = keyframes`
  0% { opacity: 0; }
  10% { opacity: 1; }
  20% { opacity: 0; }
  50% { opacity: 1; }
  75% { opacity: 0; }
  100% { opacity: 1; }
`;

const topLeft = keyframes`
  0% {
    top: calc(50% - 10px);
    left: calc(50% - 10px);
  }

  100% {
    top: calc(50% - 20px);
    left: calc(50% - 60px);
  }
`;

const TopLeftBox = styled.div`
  width: 10px;
  height: 10px;
  border-top: 1px solid rgb(88, 88, 88);
  border-left: 1px solid rgb(88, 88, 88);
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  opacity: 1;
  animation: ${blink} 0.3s linear 0.5s forwards, ${topLeft} 0.3s linear 1s forwards;
`;

const topRight = keyframes`
  0% {
    top: calc(50% - 10px);
    right: calc(50% - 10px);
  }

  100% {
    top: calc(50% - 20px);
    right: calc(50% - 60px);
  }
`;

const TopRightBox = styled.div`
  width: 10px;
  height: 10px;
  border-top: 1px solid rgb(88, 88, 88);
  border-right: 1px solid rgb(88, 88, 88);
  position: absolute;
  top: calc(50% - 10px);
  right: calc(50% - 10px);
  opacity: 1;
  animation: ${blink} 0.3s linear 0.5s forwards, ${topRight} 0.3s linear 1s forwards;
`;

const bottomLeft = keyframes`
  from {
    bottom: calc(50% - 10px);
    left: calc(50% - 10px);
  }
  to {
    bottom: calc(50% - 20px);
    left: calc(50% - 60px);
  }
`;

const BottomLeftBox = styled.div`
  width: 10px;
  height: 10px;
  border-bottom: 1px solid rgb(88, 88, 88);
  border-left: 1px solid rgb(88, 88, 88);
  position: absolute;
  bottom: calc(50% - 10px);
  left: calc(50% - 10px);
  animation: ${blink} 0.3s linear 0.5s forwards, ${bottomLeft} 0.3s linear 1s forwards;
`;

const bottomRight = keyframes`
  from {
    bottom: calc(50% - 10px);
    right: calc(50% - 10px);
  }
  to {
    bottom: calc(50% - 20px);
    right: calc(50% - 60px);
  }

`;

const BottomRightBox = styled.div`
  width: 10px;
  height: 10px;
  border-bottom: 1px solid rgb(88, 88, 88);
  border-right: 1px solid rgb(88, 88, 88);
  position: absolute;
  bottom: calc(50% - 10px);
  right: calc(50% - 10px);
  animation: ${blink} 0.3s linear 0.5s forwards, ${bottomRight} 0.3s linear 1s forwards;
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
  opacity: 0;
  animation: ${blink} 0.3s linear 1.5s forwards;
`;
