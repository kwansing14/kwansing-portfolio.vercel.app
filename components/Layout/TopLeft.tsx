import { useMemo } from 'react';
import styled from '@emotion/styled';
import styles from '@root/styles';
import { Typewriter } from 'react-simple-typewriter';
import checkRegion from '@root/utils/regionCheck';

const TopLeft = () => {
  const region = checkRegion();
  const words = useMemo(() => {
    return ['', 'Checking\nLocation', `Connected\nfrom:\n${region}`];
  }, []);

  return (
    <Container>
      <Typewriter words={words} loop={1} cursor cursorStyle='_' typeSpeed={40} delaySpeed={4000} />
    </Container>
  );
};

export default TopLeft;

const Container = styled.div`
  ${styles.systemFont}
  position: fixed;
  top: calc(80px + 24px);
  left: 24px;
  white-space: pre;
  text-transform: uppercase;
  z-index: 0;
`;

// const Line = styled.div`
//   height: 150px;
//   border-right: 1px solid rgb(88, 88, 88);
// `;
