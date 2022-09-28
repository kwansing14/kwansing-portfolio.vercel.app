import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

interface Prop {
  isSpinning: boolean;
}
const Spinner: React.FC<Prop> = ({ isSpinning }) => {
  const [count, setCount] = useState(0);
  const [intervalState, setIntervalState] = useState<NodeJS.Timer>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev: number) => prev + 1);
    }, 100);
    setIntervalState(interval);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isSpinning && count % 4 === 0) {
      clearInterval(intervalState);
    }
  }, [isSpinning, count]);

  return (
    <>
      <Div c={count} />
    </>
  );
};

export default Spinner;

const Div = styled.div<{ c: number }>`
  border-right: 1px solid rgb(88, 88, 88);
  width: 1px;
  height: 20px;
  rotate: ${({ c }) => c * 45}deg;
`;
