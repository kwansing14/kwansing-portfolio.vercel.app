import type { NextPage } from 'next';
import styled from '@emotion/styled';

import styles from '@root/styles';
import BlinkingText from '@root/components/BlinkingText';
import Card from '@root/components/Landing/Cards/Card';

import cardContent from '@root/config/cardsContent.json';

const Home: NextPage = () => {
  return (
    <HomePage>
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
              <Card key={i} {...x} />
            ))}
          </Cards>
        </div>
      </Container2>
    </HomePage>
  );
};

export default Home;

const HomePage = styled.div``;

const Container = styled.div`
  ${styles.container}
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
  position: relative;
  overflow: hidden;

  > div {
    flex-direction: column;
  }
`;

const Left = styled.div`
  height: 100vh;
  width: 100%;
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
