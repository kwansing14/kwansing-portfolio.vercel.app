import styled from '@emotion/styled';
import styles from '@root/styles';

const Logo = () => {
  return (
    <Container>
      <div>
        <SmallBox />
      </div>
    </Container>
  );
};
export default Logo;

const Container = styled.div`
  ${styles.container}
  z-index: 20;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;

const SmallBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid rgb(88, 88, 88);
`;
