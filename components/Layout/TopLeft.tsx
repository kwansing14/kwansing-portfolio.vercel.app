import { useMemo } from 'react';
import styled from '@emotion/styled';
import styles from '@root/styles';
import { Typewriter } from 'react-simple-typewriter';
import checkRegion from '@root/utils/regionCheck';

const TopLeft = () => {
  const region = checkRegion();

  const words = useMemo(() => {
    return ['', '', 'Scanning Location', `Connection from:\n${region}`];
  }, []);

  return (
    <Container>
      <Typewriter words={words} loop={1} cursor cursorStyle='_' typeSpeed={40} delaySpeed={2000} />
      <Dot />
      <LineStyle />
      <LineStyle2 />
    </Container>
  );
};

export default TopLeft;

const Container = styled.div`
  ${styles.systemFont}
  position: absolute;
  top: calc(80px + 24px);
  left: 28px;
  white-space: pre;
  z-index: 0;
  padding-top: 8px;
  padding-right: 12px;
  padding-left: 10px;

  @media ${styles.sizes.m} {
    top: calc(60px + 24px);
  }

  @media ${styles.sizes.s} {
    display: none;
  }
`;

const LineStyle = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 100%;
  border-top: 1px solid rgb(88, 88, 88);
`;

const LineStyle2 = styled.div`
  position: absolute;
  top: 4px;
  right: -4px;
  height: 30%;
  border-right: 1px solid rgb(88, 88, 88);
`;

const Dot = styled.div`
  position: absolute;
  top: 0px;
  left: -4px;
  border: 1px solid rgb(88, 88, 88);
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;
