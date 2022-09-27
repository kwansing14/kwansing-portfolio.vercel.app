import styled from '@emotion/styled';
import styles from '@root/styles';

const Header = () => {
  return (
    <Container>
      <div>
        <div>Kwan.</div>
        <div>
          <div>About Me</div>
          <div>Projects</div>
        </div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: ${styles.backgroundColor};
  height: 60px;
  width: 100%;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(88, 88, 88);

  > div {
    width: 100%;
    height: 100%;
    padding: 0 48px;
    max-width: 1400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div > div {
    flex: 4;
  }

  > div > div:nth-of-type(2) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
  }
`;
