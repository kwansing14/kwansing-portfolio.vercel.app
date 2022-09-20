import styled from '@emotion/styled';

interface Prop {
  children: React.ReactNode;
}

const Background: React.FC<Prop> = ({ children }) => {
  return (
    <>
      <Container>
        <DivBlack />
        <Div4 />
        <Div3 />
        <Div2 />
        <BlurDiv />
      </Container>
      <Children>{children}</Children>
    </>
  );
};

export default Background;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: none;
`;

const Children = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: none;
  width: 100%;
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
  width: 20%;
  aspect-ratio: 1/1;
  top: 30%;
  left: 10%;
  background-color: #020248;
  border-radius: 50%;
`;

const Div3 = styled.div`
  position: absolute;
  width: 40%;
  aspect-ratio: 1/1;
  top: 60%;
  right: 15%;
  background-color: #0b190e;
  border-radius: 50%;
`;

const Div4 = styled.div`
  position: absolute;
  width: 50%;
  aspect-ratio: 1/1;
  top: -30%;
  right: -10%;
  background-color: #0e031d;
  border-radius: 50%;
`;
