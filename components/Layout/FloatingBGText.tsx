import styled from '@emotion/styled';

const FloatingBGText = () => {
  return <Container>TEXT</Container>;
};

export default FloatingBGText;

const Container = styled.div`
  border: 2px solid red;
  position: fixed;
  top: 0;
  left: 0;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 100vh;
  font-weight: 800;
  font-size: 200px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
`;
