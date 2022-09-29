import styled from '@emotion/styled';
import styles from '@root/styles';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { IoMailOutline } from 'react-icons/io5';
import BorderCutButton from '@root/components/Animation/BorderCutButton';

{
  /* <Button href='https://www.linkedin.com/in/kwansing/' target='_blank'>
Linked <SiLinkedin />
</Button>
<Button href='https://github.com/kwansing14'>
Github <SiGithub />
</Button>
<Button href='mailto:kwansing@hotmail.sg'>
Email <IoMailOutline />
</Button> */
}

const BottomLeft = () => {
  return (
    <Container>
      <BorderCutButton href='https://www.linkedin.com/in/kwansing/' newTab>
        <SiLinkedin />
      </BorderCutButton>
      <BorderCutButton href='https://github.com/kwansing14' newTab>
        <SiGithub />
      </BorderCutButton>
      <BorderCutButton href='mailto:kwansing@hotmail.sg' newTab>
        <IoMailOutline />
      </BorderCutButton>
      <Dot />
      <LineStyle />
      <LineStyle2 />
    </Container>
  );
};

export default BottomLeft;

const Container = styled.div`
  position: fixed;
  bottom: 24px;
  left: 16px;
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 1;
  gap: 12px;
  padding-bottom: 18px;
  padding-right: 8px;

  > a {
    div:nth-of-type(1),
    div:nth-of-type(2),
    div:nth-of-type(3) {
      padding: 4px 12px;
    }
  }

  @media ${styles.sizes.m} {
    display: none;
  }
`;

const LineStyle = styled.div`
  position: absolute;
  bottom: 3.5px;
  left: 16px;
  width: 70%;
  border-top: 1px solid rgb(88, 88, 88);
`;

const LineStyle2 = styled.div`
  position: absolute;
  bottom: 3.5px;
  right: -1px;
  height: 9.5%;
  border-right: 1px solid rgb(88, 88, 88);
`;

const Dot = styled.div`
  position: absolute;
  bottom: 0px;
  left: 8px;
  border: 1px solid rgb(88, 88, 88);
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;
