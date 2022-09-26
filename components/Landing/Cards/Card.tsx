import styled from '@emotion/styled';
import styles from '@root/styles';
import FadeUpWrapper from '@root/components/Animation/FadeUpWrapper';

import {
  SiNextdotjs,
  SiVercel,
  SiSolidity,
  SiTypescript,
  SiJavascript,
  SiStyledcomponents,
  SiEslint,
} from 'react-icons/si';
import { DiNodejsSmall } from 'react-icons/di';

interface prop {
  background: string;
  title: string;
  desc: string;
  link: string;
  img: string;
  linkTitle: string;
  techs: string[];
  delay: number;
  gap: number;
}

interface imgProp {
  background: string;
}

interface cardContainerProp {
  gap: number;
}

const Card: React.FC<prop> = (prop) => {
  const { background, img, title, desc, link, linkTitle, techs, delay, gap } = prop;
  return (
    <CardContainer gap={gap}>
      <Img background={background}>
        <img src={img} alt={title} />
      </Img>
      <Desc>
        <FadeUpWrapper delay={delay}>
          <Text>{desc}</Text>
          <LinkTo onClick={() => window.open(link, '_blank')}>{linkTitle}</LinkTo>
          <Skills>
            {techs?.map((x) => (
              <>
                {x === 'nextjs' && <SiNextdotjs />}
                {x === 'vercel' && <SiVercel />}
                {x === 'solidity' && <SiSolidity />}
                {x === 'emotion' && <img src='/static/icons/emotion-icons.png' alt='emotionsh' />}
                {x === 'nodejs' && <DiNodejsSmall />}
                {x === 'typescript' && <SiTypescript />}
                {x === 'javascript' && <SiJavascript />}
                {x === 'styledComponents' && <SiStyledcomponents />}
                {x === 'eslint' && <SiEslint />}
              </>
            ))}
          </Skills>
        </FadeUpWrapper>
      </Desc>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div<cardContainerProp>`
  width: ${({ gap }) => gap && `calc((100% - ${gap * 2}px) / 3)`};
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;

  /* &:hover {
    box-shadow: 15px 15px 15px #868686, -15px -15px 15px #ffffff;
  } */

  transition: all 0.3s ease-in-out;
  color: white;
  background: #1e1e1e;

  /* border: 2px solid #101010; */
`;

const Img = styled.div<imgProp>`
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16/12;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background};

  img {
    height: 100%;
  }
`;

const Desc = styled.div`
  padding: 16px 24px;
`;

const Text = styled.div`
  ${styles.contentFont}
  padding-bottom: 6px;
`;

const LinkTo = styled.div`
  ${styles.contentFont}
  text-decoration: underline;
  padding-bottom: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const Skills = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  img {
    width: 16px;
    height: 16px;
  }
`;
