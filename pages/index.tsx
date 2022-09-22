import type { NextPage } from 'next';
import styled from '@emotion/styled';

import styles from '@root/styles';
import Background from '@root/components/Layout/Background';
import BlinkingText from '@root/components/Layout/BlinkingText';

interface imgProp {
  background: string;
}

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
            <Title>Projects</Title>
            <Cards>
              <Card>
                <Img background={'#6AA0A9'}>
                  <img src='/static/projects/KnoxDAO.png' alt='KnoxDAO' />
                </Img>
                <Desc>
                  <Text>Sole developer for KnoxDAO project.</Text>
                  <LinkTo onClick={() => window.open('https://www.knoxer.xyz/', '_blank')}>
                    KnoxDAO site.
                  </LinkTo>
                </Desc>
              </Card>
              <Card>
                <Img background={'#4C6960'}>
                  <img src='/static/projects/Aleph-Soul.jpeg' alt='Aleph-Soul' />
                </Img>
                <Desc>
                  <Text>Part of the development team for Aleph Soul Project.</Text>
                  <LinkTo onClick={() => window.open('https://www.knoxer.xyz/', '_blank')}>
                    KnoxDAO site.
                  </LinkTo>
                </Desc>
              </Card>
              <Card>
                <Img background={'black'}>
                  <img src='/static/projects/Aleph-NFT-Contest.jpeg' alt='KnoxDAO' />
                </Img>
                <Desc>
                  <Text>Winner of the very first NFT Challenge in Aleph.</Text>
                  <LinkTo onClick={() => window.open('https://www.knoxer.xyz/', '_blank')}>
                    KnoxDAO site.
                  </LinkTo>
                </Desc>
              </Card>
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

  > div {
    flex-direction: column;
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
  width: 45%;
  cursor: pointer;
  overflow: hidden;
  background: #e0e0e0;
  margin-bottom: 80px;

  &:hover {
    box-shadow: 10px 10px 30px #bebebe, -10px -10px 30px #ffffff;
  }

  transition: all 0.6s ease-in-out;
  color: black;
`;

const Img = styled.div<imgProp>`
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4/3;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background};

  img {
    width: 100%;
  }
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
  gap: 10%;
`;

const Desc = styled.div`
  padding: 16px 24px;
`;

const Text = styled.div`
  ${styles.contentFont}
`;

const LinkTo = styled.div`
  ${styles.contentFont}
  text-decoration: underline;
`;
