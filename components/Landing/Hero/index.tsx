import styled from '@emotion/styled';
import styles from '@root/styles';
import { keyframes } from '@emotion/react';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJest,
  SiJavascript,
  SiSolidity,
} from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import BorderCutWrapper from '@root/components/Animation/BorderCutWrapper';

interface CircleProp {
  top: string;
  left: string;
}

const Icons = [
  { icon: <SiNextdotjs />, top: '70px', left: '100px' },
  { icon: <SiReact />, top: '255px', left: '15px' },
  { icon: <SiTypescript />, top: '70px', left: '420px' },
  { icon: <SiJavascript />, top: '255px', left: '510px' },
  { icon: <SiJest />, top: '450px', left: '100px' },
  { icon: <SiSolidity />, top: '450px', left: '430px' },
];

const Hero = () => {
  return (
    <>
      <Left>
        <Subtitle>Hi, my name is</Subtitle>
        <Title>Kwan Sing</Title>
        <Desc>I build stuff on the web, currently working as a full time front-end developer.</Desc>
      </Left>
      <Right>
        <BigCircle />
        <RightHero>
          {Icons.map((icon, index) => (
            <Circle key={index} top={icon.top} left={icon.left}>
              {icon.icon}
            </Circle>
          ))}
          <TypeWriterWrapper>
            <BorderCutWrapper>Some Text To be Included</BorderCutWrapper>
          </TypeWriterWrapper>
        </RightHero>
      </Right>
    </>
  );
};

export default Hero;

const Subtitle = styled.div`
  ${styles.subTitleFont}
`;

const Title = styled.div`
  ${styles.titleFont}
`;

const Desc = styled.div`
  ${styles.contentFont}
  padding: 12px 0;
`;

const Left = styled.div`
  flex: 6;
`;

const CircleExpand = keyframes`
  0% {
    transform: scale(0);
  }
  60%{
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const BigCircle = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 500px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  animation: ${CircleExpand} 1s ease-in-out;
`;

const Right = styled.div`
  flex: 6;
  position: relative;
  margin-top: 60px;
  height: 80%;
`;

const SuperCoolRotation = keyframes`
  0% {
    rotate: -20deg;
  }
  100% {
    rotate: 0deg;
  }
`;

const RightHero = styled.div`
  width: 580px;
  height: 580px;
  position: relative;
  rotate: -20deg;
  animation: ${SuperCoolRotation} 1s ease-in-out forwards;
  animation-delay: 1s;
`;

const SmallExpand = keyframes`
  0% {
    scale: 0.2;
    rotate: 20deg;
  }
  60%{
    scale: 1.05;
  }
  100% {
    scale: 1;
    rotate: 0deg;
  }
`;

const Circle = styled.div<CircleProp>`
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  width: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 0;
  animation: ${SmallExpand} 1s ease-in-out forwards;
  animation-delay: 1s;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const TextAntiRotate = keyframes`
  0% {
    rotate: 20deg;
  }
  100% {
    rotate: 0deg;
  }
`;

const TypeWriterWrapper = styled.div`
  width: 400px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  rotate: 20deg;
  animation: ${TextAntiRotate} 1s ease-in-out forwards;
  animation-delay: 1s;
`;