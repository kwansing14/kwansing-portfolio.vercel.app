import type { NextPage } from 'next';
import styled from '@emotion/styled';
import styles from '@root/styles';
import Cards from '@root/components/Landing/Cards';
import AboutMe from '@root/components/AboutMe';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <div>
          <Subtitle>Hi, my name is</Subtitle>
          <Title>Kwan Sing</Title>
          <Desc>
            I build stuff on the web, currently working as a full time front-end developer.
          </Desc>
        </div>
      </Container>
      <Container2>
        <div>
          <SmallTitle>ABOUT ME</SmallTitle>
          <AboutMe />
        </div>
      </Container2>
      <Container2>
        <div>
          <SmallTitle>WORK EXPERIENCES</SmallTitle>
        </div>
      </Container2>
      <Container2>
        <div>
          <SmallTitle>PROJECTS</SmallTitle>
          <Cards />
        </div>
      </Container2>
    </>
  );
};

export default Home;

const Container = styled.div`
  ${styles.container}

  > div {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Container2 = styled.div`
  ${styles.container}
  height: auto;
  padding-bottom: 60px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Subtitle = styled.div`
  ${styles.subTitleFont}
`;

const Title = styled.div`
  ${styles.titleFont}
`;

const SmallTitle = styled.div`
  ${styles.title2Font}
  padding-bottom: 60px;
`;

const Desc = styled.div`
  ${styles.contentFont}
  padding: 12px 0;
`;
