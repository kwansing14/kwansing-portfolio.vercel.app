import { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import styles from '@root/styles';
import format from 'date-fns/format';

const TopRight = () => {
  const [state, setState] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  const date = format(new Date(), 'dd/MMM/yyyy');
  const time = useMemo(() => format(new Date(), 'hh:mm:ss aaa'), [state]);

  useEffect(() => {
    setHydrated(true);
    const interval = setInterval(() => {
      setState((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // const time =
  return (
    <Container>
      {hydrated && (
        <DatesTime>
          {date}
          {'\n'}
          {time}
        </DatesTime>
      )}
      <Dot />
      <LineStyle />
      <LineStyle2 />
    </Container>
  );
};

export default TopRight;

const Container = styled.div`
  ${styles.systemFont}
  position: absolute;
  top: calc(80px + 24px);
  right: 24px;
  white-space: pre;
  z-index: 0;
  padding-right: 16px;
  padding-bottom: 8px;

  @media ${styles.sizes.m} {
    top: calc(60px + 24px);
  }
`;

const DatesTime = styled.div`
  display: flex;
  text-align: right;
`;

const LineStyle = styled.div`
  position: absolute;
  bottom: 0px;
  right: 4px;
  width: 40%;
  border-top: 1px solid rgb(88, 88, 88);
`;

const LineStyle2 = styled.div`
  position: absolute;
  top: 8px;
  right: 3.5px;
  height: 82%;
  border-right: 1px solid rgb(88, 88, 88);

  @media ${styles.sizes.m} {
    height: 75%;
  }
`;

const Dot = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  border: 1px solid rgb(88, 88, 88);
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;
