import styled from '@emotion/styled';
import styles from '@root/styles';

const Header = () => {
  return (
    <Container>
      <div>Kwan Sing</div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: ${styles.backgroundColor};
  border: 2px solid red;
  height: 60px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;
