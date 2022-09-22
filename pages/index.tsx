import type { NextPage } from 'next';
import styled from '@emotion/styled';

import styles from '@root/styles';
import Background from '@root/components/Layout/Background';
import BlinkingText from '@root/components/Layout/BlinkingText';
import Card from '@root/components/Landing/Card';

import cardContent from '@root/config/cardsContent.json';
interface imgProp {
  background: string;
}

const Home: NextPage = () => {
  console.log(cardContent);
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
            <Title>Projects</Title>
            <Cards>
              {cardContent.map((x, i) => (
                <Card {...x} key={i} />
              ))}
            </Cards>
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
  overflow: hidden;
  z-index: 1;
`;

const Container2 = styled.div`
  ${styles.container}
  background: #e0e0e0;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
  color: black;
  z-index: 2;
  position: relative;
  overflow: hidden;

  > div {
    flex-direction: column;
  }
`;

const Left = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  top: 0;
  left: 48px;
`;

const SubTitle = styled.div`
  ${styles.subTitleFont}
`;

const Right = styled.div`
  height: 100vh;
  /* flex: 6; */
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

const Title = styled.div`
  width: 100%;
  text-align: center;
  ${styles.titleFont}
  padding-bottom: 40px;
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 1024px;
  flex-wrap: wrap;
  gap: 48px;
`;
