import styled from '@emotion/styled';

const Background: React.FC = () => {
  return (
    <>
      <Container>
        <DivBlack />
        <Div5 />
        <Div4 />
        <Div3 />
        <Div2 />
        <BlurDiv />
      </Container>
    </>
  );
};

export default Background;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  background: none;
  position: fixed;
  z-index: -1;
`;

const BlurDiv = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: none;
  backdrop-filter: blur(80px);
`;

const DivBlack = styled.div`
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

const Div2 = styled.div`
  position: absolute;
  width: 50%;
  aspect-ratio: 1/1;
  top: 50%;
  left: 10%;
  background-color: #010129;
  border-radius: 50%;
`;

const Div3 = styled.div`
  position: absolute;
  width: 60%;
  aspect-ratio: 1/1;
  top: 60%;
  right: 0%;
  background-color: #14190b;
  border-radius: 50%;
`;

const Div4 = styled.div`
  position: absolute;
  width: 60%;
  aspect-ratio: 1/1;
  top: -20%;
  right: -25%;
  background-color: #1a0d0d;
  border-radius: 50%;
`;

const Div5 = styled.div`
  position: absolute;
  width: 50%;
  aspect-ratio: 1/1;
  top: -30%;
  left: 5%;
  background-color: #22221c;
  border-radius: 50%;
`;
