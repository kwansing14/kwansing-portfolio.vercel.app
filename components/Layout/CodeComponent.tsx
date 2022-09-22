import TextInCodeStyle from '@root/components/Layout/TextInCodeStyle';
import styled from '@emotion/styled';

const CodeComponent = () => {
  return (
    <CodeContainer>
      <HeaderButtons>
        <button />
        <button />
        <button />
      </HeaderButtons>
      <RightText>
        <TextInCodeStyle />
      </RightText>
    </CodeContainer>
  );
};

export default CodeComponent;

const RightText = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-family: Source Code Pro;
  white-space: pre;
`;

const CodeContainer = styled.div`
  width: 100%;
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 12px;
`;

const HeaderButtons = styled.div`
  display: flex;
  gap: 8px;
  padding-bottom: 12px;

  button {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    border: none;
    cursor: pointer;
  }

  button:nth-of-type(1) {
    background-color: #ed6a5d;
  }

  button:nth-of-type(2) {
    background-color: #f4bf4f;
  }

  button:nth-of-type(3) {
    background-color: #61c554;
  }
`;
