import { useState, useEffect, useRef } from 'react';
// import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { useIntersecting } from '@root/customHooks/useIntersecting';
import styles from '@root/styles';
import Spinner from '@root/components/Animation/Spinner';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { IoMailOutline } from 'react-icons/io5';
// import BorderCutButton from '../Animation/BorderCutButton';

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
            <Row noBorder>
              <div />
              <Buttons>
                <Button href='https://www.linkedin.com/in/kwansing/' target='_blank'>
                  Linked <SiLinkedin />
                </Button>
                <Button href='https://github.com/kwansing14'>
                  Github <SiGithub />
                </Button>
                <Button href='mailto:kwansing@hotmail.sg'>
                  Email <IoMailOutline />
                </Button>
              </Buttons>
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
  height: 100px;

  > div {
    height: 100%;
  }

  @media ${styles.sizes.m} {
    height: 120px;
  }
`;

const InnerContainer = styled.div`
  border-top: 1px solid rgb(88, 88, 88);
  width: 100%;
  height: 100%;
  color: rgb(160, 160, 160);
  margin-bottom: 32px;

  @media ${styles.sizes.m} {
    display: flex;
    flex-direction: column;
    > div:last-child {
      margin-top: auto;
    }
  }
`;

const Row = styled.div<{ noBorder?: boolean }>`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  height: 50%;
  width: 100%;
  border-left: ${({ noBorder }) => (noBorder ? 'none' : '1px solid rgb(88, 88, 88)')};
  padding-left: 8px;

  > div:nth-of-type(1) {
    display: flex;
    height: 100%;
    align-items: center;
  }

  > div:nth-of-type(2) {
    display: flex;
    height: 100%;
  }

  @media ${styles.sizes.m} {
    border-right: ${({ noBorder }) => (noBorder ? 'none' : '1px solid rgb(88, 88, 88)')};
    flex-direction: column;
    height: ${({ noBorder }) => (noBorder ? '35%' : '65%')};
    padding-left: 16px;
    padding-top: 8px;

    > div {
      width: 100%;
    }
  }
`;

const BottomTextOverlay = styled.div<{ isSpinning: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ isSpinning }) => (isSpinning ? '15px' : '0px')};
  transition: gap 0.35s ease-in-out;

  > div:nth-of-type(1) {
    opacity: ${({ isSpinning }) => (isSpinning ? '1' : '0')};
    transition: opacity 0.3s linear 0.15s;
  }

  > div:nth-of-type(2) {
    width: ${({ isSpinning }) => (isSpinning ? '0%' : '100%')};
    border-right: ${({ isSpinning }) => (isSpinning ? '' : '1px solid rgb(88, 88, 88)')};
    padding: ${({ isSpinning }) => (isSpinning ? '8px 0' : '8px')};
    overflow: hidden;
    white-space: nowrap;
    transition: all 1s ease-in-out 0.2s;
    display: flex;
    align-items: center;
    height: 100%;
  }

  @media ${styles.sizes.m} {
    gap: 0px;

    > div:nth-of-type(1) {
      opacity: 0;
    }

    > div:nth-of-type(2) {
      width: 100%;
      border-right: none;
      padding: 0;
    }
  }
`;

const Buttons = styled.div`
  padding: 0 8px;
  padding-top: 12px;
  color: white;
  font-size: 12px;
  white-space: nowrap;
  gap: 8px;

  @media ${styles.sizes.m} {
    padding-top: 7px;
  }
`;

const Button = styled.a`
  display: flex;
  border-bottom: 1px solid rgb(88, 88, 88);
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  cursor: pointer;
  z-index: 1;
`;
