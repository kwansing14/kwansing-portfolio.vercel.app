import type { NextPage } from 'next';
import styled from '@emotion/styled';
import styles from '@root/styles';
import Cards from '@root/components/Landing/Cards';
import AboutMe from '@root/components/Landing/AboutMe';
import Hero from '@root/components/Landing/Hero';
// import Experiences from '@root/components/Landing/Experiences';
import LoadingScreen from '@root/components/Layout/LoadingScreen';

const Home: NextPage = () => {
  return (
    <>
      <LoadingScreen />
      <Container id='#'>
        <div>
          <Hero />
        </div>
      </Container>
      <Container2 id='about-me'>
        <div>
          <SmallTitle>ABOUT ME</SmallTitle>
          <AboutMe />
        </div>
      </Container2>
      <Container2 id='projects'>
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
    height: 100%;
  }

  @media ${styles.sizes.m} {
    height: auto;
    padding-top: 80px;
    > div {
      flex-direction: column;
      width: 100%;
      align-items: center;
      height: auto;
    }
  }
`;

const Container2 = styled.div`
  ${styles.container}
  padding-top: 100px;
  height: auto;
  padding-bottom: 60px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const SmallTitle = styled.div`
  ${styles.title2Font}
  padding-bottom: 60px;
`;
