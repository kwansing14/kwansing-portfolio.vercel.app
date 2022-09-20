import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { container, subTitleFont, contentFont, blinkingTitle } from '@root/styles';
import Background from '@root/components/Layout/Background';

interface StyleProp {
  delay: number;
}

const Home: NextPage = () => {
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

  const codeText = 'if (hungry) {\n  eat() \n}';

  return (
    <div>
      <Background>
        <Container>
          <div>
            <Left>
              <SmallText>My name is</SmallText>
              <Title>{splitText('Kwan Sing.')}</Title>
              <SubTitle>I build stuff.</SubTitle>
            </Left>
            <Right>
              <CodeContainer>
                {/* <Header>abc</Header> */}
                <RightText>{codeText}</RightText>
              </CodeContainer>
            </Right>
          </div>
        </Container>
      </Background>
    </div>
  );
};

export default Home;

const Container = styled.div`
  ${container}
  background: none;
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

const Left = styled.div`
  height: 100vh;
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  ${blinkingTitle}
`;

const SubTitle = styled.div`
  ${subTitleFont}
`;

const BlinkingSpan = styled.span<StyleProp>`
  animation: ${blinking} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: ${({ delay }) => delay / 10 + 1}s;
`;

const Right = styled.div`
  height: 100vh;
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

const SmallText = styled.div`
  font-size: 16px;
  color: #92ccfb;
  font-weight: 700;
`;

const RightText = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #d1d1d1;
  font-family: Source Code Pro;
  white-space: pre;
`;

const CodeContainer = styled.div`
  width: 100%;
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 16px;
`;

const Header = styled.div``;
