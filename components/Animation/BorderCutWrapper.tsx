import styled from '@emotion/styled';
// import styles from '@root/styles';
interface Prop {
  children: string | React.ReactNode;
}

const BorderCutWrapper: React.FC<Prop> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BorderCutWrapper;

const Container = styled.div`
  /* height: 120px; */
  height: 100%;
  padding: 0 48px;
  font-size: 48px;
  clip-path: polygon(
    0 10px,
    10px 0,
    100% 0,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    0 100%
  );
  position: relative;
  border: 1px solid rgb(88, 88, 88);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  ::before {
    content: '';
    width: 1.5px;
    height: 40px;
    background: rgb(88, 88, 88);
    transform: rotate(45deg);
    position: absolute;
    border-top: 0;
    border-left: 0;
    border-bottom: 0;
    top: -17px;
    left: 5px;
  }

  ::after {
    content: '';
    width: 1.5px;
    height: 40px;
    background: rgb(88, 88, 88);
    transform: rotate(45deg);
    position: absolute;
    border-top: 0;
    border-left: 0;
    border-bottom: 0;
    top: auto;
    right: -5px;
    bottom: -7px;
  }
`;
