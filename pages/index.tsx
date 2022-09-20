import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import styles from '@root/styles';
import Background from '@root/components/Layout/Background';
import TextInCodeStyle from '@root/components/Layout/TextInCodeStyle';
import BlinkingText from '@root/components/Layout/BlinkingText';

const Home: NextPage = () => {
  return (
    <div>
      <Background>
        <Container>
          <div>
            <Left>
              <SmallText>My name is</SmallText>
              <BlinkingText>Kwan Sing</BlinkingText>
              <SubTitle>I build stuff on the web.</SubTitle>
            </Left>
            <Right>
              <CodeContainer>
                <HeaderButtons>
                  <button />
                  <button />
                  <button />
                </HeaderButtons>
                <RightText>
                  <TextInCodeStyle />
                </RightText>
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
  ${styles.container}
  background: none;
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
const SubTitle = styled.div`
  ${styles.subTitleFont}
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
  font-family: Source Code Pro;
  white-space: pre;
`;

const CodeContainer = styled.div`
  width: 100%;
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 12px;
`;

const HeaderButtons = styled.div`
  display: flex;
  gap: 8px;
  padding-bottom: 12px;

  button {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    border: none;
    cursor: pointer;
  }

  button:nth-of-type(1) {
    background-color: #ed6a5d;
  }

  button:nth-of-type(2) {
    background-color: #f4bf4f;
  }

  button:nth-of-type(3) {
    background-color: #61c554;
  }
`;
