import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
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

import styles from '@root/styles';
import BorderCutWrapper from '@root/components/Animation/BorderCutWrapper';

interface CircleProp {
  top: string;
  left: string;
}

const Icons = [
  { icon: <SiNextdotjs />, top: '12.5%', left: '22%' },
  { icon: <SiTypescript />, top: '12.5%', left: '68%' },
  { icon: <SiReact />, top: '45%', left: '5%' },
  { icon: <SiJavascript />, top: '45%', left: '85%' },
  { icon: <SiJest />, top: '77.5%', left: '22%' },
  { icon: <SiSolidity />, top: '77.5%', left: '68%' },
];

const Hero = () => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsTyping(true);
    }, 2500);
  }, []);

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
            <BorderCutWrapper>
              {isTyping && (
                <Typewriter
                  words={['ReactJS', 'NextJS', 'TypeScript', 'Javascript', 'Solidity', 'Jest']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </BorderCutWrapper>
          </TypeWriterWrapper>
        </RightHero>
      </Right>
    </>
  );
};

export default Hero;

const delay = '3s';
const circleDelay = '2.5s';

const Subtitle = styled.div`
  ${styles.subTitleFont}
`;

const Title = styled.div`
  ${styles.titleFont}
  white-space:nowrap;
`;

const Desc = styled.div`
  ${styles.contentFont}
  padding: 12px 0;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${styles.sizes.m} {
    width: 100%;
  }
`;

const CircleExpand = keyframes`
  0% {
    scale: 0;
  }
  60%{
    scale: 1.05;
  }
  100% {
    scale: 1;
  }
`;

const BigCircle = styled.div`
  position: absolute;
  top: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 80%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  scale: 0;
  translate: 0 -50%;
  animation: ${CircleExpand} 1s ease-in-out forwards;
  animation-delay: ${circleDelay};
`;

const Right = styled.div`
  position: relative;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;

  @media ${styles.sizes.l} {
    width: 400px;
    height: 400px;
  }

  @media ${styles.sizes.m} {
    margin-top: 0px;
    margin-bottom: 24px;
    order: -1;
    width: 300px;
    height: 300px;
  }
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
  width: 600px;
  height: 600px;
  position: relative;
  rotate: -20deg;
  animation: ${SuperCoolRotation} 1s ease-in-out forwards;
  animation-delay: ${delay};

  @media ${styles.sizes.l} {
    width: 400px;
    height: 400px;
  }

  @media ${styles.sizes.m} {
    width: 300px;
    height: 300px;
  }
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
  animation-delay: ${delay};

  svg {
    width: 100%;
    height: 100%;
  }

  @media ${styles.sizes.l} {
    width: 40px;
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
  width: 300px;
  height: 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  rotate: 20deg;
  animation: ${TextAntiRotate} 1s ease-in-out forwards;
  animation-delay: ${delay};

  > div {
    font-size: 32px;
  }

  @media ${styles.sizes.l} {
    width: 200px;
    height: 80px;
    > div {
      font-size: 24px;
    }
  }

  @media ${styles.sizes.m} {
    width: 150px;
    height: 40px;
    > div {
      font-size: 16px;
    }
  }
`;
