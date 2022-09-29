import styled from '@emotion/styled';
import styles from '@root/styles';
import BorderCutButton from '../Animation/BorderCutButton';
import Link from 'next/link';

const Header = () => {
  return (
    <Container>
      <div>
        <Link href='/#'>
          <ButtonLeft>Kwan.</ButtonLeft>
        </Link>
        <div>
          <BorderCutButton href={'#about-me'}>
            <Button>About Me</Button>
          </BorderCutButton>
          <BorderCutButton href={'#projects'}>
            <Button>Projects</Button>
          </BorderCutButton>
        </div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: ${styles.backgroundColor};
  height: 80px;
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
    padding: 0 88px;
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

  @media ${styles.sizes.m} {
    height: 55px;
    > div {
      padding: 0 16px;
    }
  }
`;

const Button = styled.div`
  border: none;
  background: none;
  color: white;
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
`;

const ButtonLeft = styled.div`
  border: none;
  background: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
