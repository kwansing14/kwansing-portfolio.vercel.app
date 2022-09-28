import { useState, useEffect, useRef } from 'react';
// import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { useIntersecting } from '@root/customHooks/useIntersecting';
import styles from '@root/styles';
import Spinner from '@root/components/Animation/Spinner';

const Footer = () => {
  const ref = useRef(null);
  const [visible] = useIntersecting(ref, true);
  const [isSpinning, setIsSpinning] = useState(false);

  const runWhenVisible = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 2000);
  };

  useEffect(() => {
    if (visible) runWhenVisible();
  }, [visible]);

  return (
    <Container ref={ref}>
      <div>
        {visible && (
          <InnerContainer>
            <Row>
              <div>Designed and built by Kwan Sing</div>
              <div>
                <BottomTextOverlay isSpinning={isSpinning}>
                  <Spinner isSpinning={isSpinning} />
                  <div>Built with NextJS & Emotion, deployed on Vercel.</div>
                </BottomTextOverlay>
              </div>
            </Row>
            <Row>
              <div />
              <Buttons>button</Buttons>
            </Row>
          </InnerContainer>
        )}
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  ${styles.container};
  height: 140px;

  > div {
    height: 100%;
  }
`;

// const blink = keyframes`
//   0% { opacity: 0; }
//   10% { opacity: 1; }
//   20% { opacity: 0; }
//   50% { opacity: 1; }
//   75% { opacity: 0; }
//   100% { opacity: 1; }
// `;

const InnerContainer = styled.div`
  border-top: 1px solid rgb(88, 88, 88);
  width: 100%;
  height: 100%;
  padding-top: 16px;
  color: rgb(160, 160, 160);
`;

const Row = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;

  > div:nth-of-type(1) {
    padding: 4px 8px;
    border-left: 1px solid rgb(88, 88, 88);
    display: flex;
    align-items: center;
  }

  > div:nth-of-type(2) {
    display: flex;
  }
`;

const BottomTextOverlay = styled.div<{ isSpinning: boolean }>`
  width: 100%;
  display: flex;
  gap: ${({ isSpinning }) => (isSpinning ? '15px' : '0px')};
  transition: gap 0.35s ease-in-out;

  > div:nth-of-type(1) {
    opacity: ${({ isSpinning }) => (isSpinning ? '1' : '0')};
    transition: opacity 0.3s linear 0.15s;
  }

  > div:nth-of-type(2) {
    width: ${({ isSpinning }) => (isSpinning ? '0%' : '100%')};
    border-right: ${({ isSpinning }) => (isSpinning ? '' : '1px solid rgb(88, 88, 88)')};
    padding: ${({ isSpinning }) => (isSpinning ? '4px 0' : '4px 8px')};
    overflow: hidden;
    white-space: nowrap;
    transition: all 1s ease-in-out 0.2s;
    display: flex;
    align-items: center;
  }
`;

const Buttons = styled.div`
  padding: 4px 8px;
  border-right: 1px solid rgb(88, 88, 88);
`;
