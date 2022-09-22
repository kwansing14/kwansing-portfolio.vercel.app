import styled from '@emotion/styled';
import styles from '@root/styles';

interface imgProp {
  background: string;
}

interface prop {
  background: string;
  title: string;
  desc: string;
  link: string;
  img: string;
  linkTitle: string;
}

const Card: React.FC<prop> = (prop) => {
  console.log(prop);
  const { background, img, title, desc, link, linkTitle } = prop;
  return (
    <CardContainer>
      <Img background={background}>
        <img src={img} alt={title} />
      </Img>
      <Desc>
        <Text>{desc}</Text>
        <LinkTo onClick={() => window.open(link, '_blank')}>{linkTitle}</LinkTo>
      </Desc>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: calc(50% - 24px);
  cursor: pointer;
  overflow: hidden;
  background: #e0e0e0;

  &:hover {
    box-shadow: 10px 10px 30px #bebebe, -10px -10px 30px #ffffff;
  }

  transition: all 0.6s ease-in-out;
  color: black;
`;

const Img = styled.div<imgProp>`
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4/3;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background};

  img {
    width: 100%;
  }
`;

const Desc = styled.div`
  padding: 16px 24px;
  background: white;
  height: 100%;
`;

const Text = styled.div`
  ${styles.contentFont}
`;

const LinkTo = styled.div`
  ${styles.contentFont}
  text-decoration: underline;
`;

const Skills = styled.div``;
