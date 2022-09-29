import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import styles from '@root/styles';

const BottomRight = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('kwansing@hotmail.sg');
    setCopied(true);
  };

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 1500);
  }, [copied]);

  return (
    <Container onClick={copyToClipboard}>
      <Text>kwansing@hotmail.sg</Text>
      <Text2 copied={copied}>Copied to clipboard.</Text2>
      <LineStyle />
      <LineStyle2 />
      <Dot />
    </Container>
  );
};

export default BottomRight;

const Container = styled.div`
  position: fixed;
  bottom: 88px;
  right: 12px;
  cursor: pointer;
  z-index: 1;

  @media ${styles.sizes.m} {
    display: none;
  }

  &:hover {
    > div {
      color: white;
    }
  }
`;

const Text = styled.div`
  ${styles.systemFont}
  writing-mode: vertical-rl;
  padding: 0 4px;
  padding-bottom: 12px;
  transition: all 0.3s ease-in-out;
`;

const Text2 = styled.div<{ copied: boolean }>`
  ${styles.systemFont}
  writing-mode: vertical-rl;
  padding: 8px 4px;
  position: absolute;
  top: -8px;
  right: 0px;
  background: white;
  color: black;
  border-radius: 30px;
  white-space: nowrap;
  opacity: ${({ copied }) => (copied ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const LineStyle = styled.div`
  border-left: 1px solid rgb(88, 88, 88);
  border-bottom: 1px solid rgb(88, 88, 88);
  height: 100%;
  width: calc(100% - 14px);
  position: absolute;
  top: 0;
  left: 0;
`;

const LineStyle2 = styled.div`
  border-right: 1px solid rgb(88, 88, 88);
  height: 56px;
  width: calc(100% - 4px);
  position: absolute;
  right: 14px;
  bottom: 0;
  translate: 0 100%;
`;

const Dot = styled.div`
  position: absolute;
  right: 10.5px;
  bottom: -55px;
  translate: 0 100%;
  border: 1px solid rgb(88, 88, 88);
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;
