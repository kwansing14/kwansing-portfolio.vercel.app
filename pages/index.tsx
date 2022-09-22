import type { NextPage } from 'next';
import styled from '@emotion/styled';

import styles from '@root/styles';
import Background from '@root/components/Layout/Background';
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
            <Right>{/* empty for now no idea yet */}</Right>
          </div>
        </Container>
        <Container2>
          <div>
            <Card>lorem ipsum... </Card>
            <Card>lorem ipsum... </Card>
          </div>
        </Container2>
      </Background>
    </div>
  );
};

export default Home;

const Container = styled.div`
  ${styles.container}
  background: none;
`;

const Container2 = styled.div`
  ${styles.container}
  background: #e0e0e0;
  display: flex;
  div {
    color: black;
    gap: 80px;
  }
  width: 100%;
  justify-content: center;
  align-items: center;
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

const Card = styled.div`
  height: 400px;
  width: 300px;
  padding: 12px;

  border-radius: 10px;
  background: #e0e0e0;

  &:hover {
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }
  transition: box-shadow 0.3s ease-in-out;
  color: black;
`;
