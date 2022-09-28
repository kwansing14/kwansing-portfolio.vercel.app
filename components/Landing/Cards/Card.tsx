import styled from '@emotion/styled';
import styles from '@root/styles';
import FadeUpWrapper from '@root/components/Animation/FadeUpWrapper';
import BorderCutCard from '@root/components/Animation/BorderCutCard';

import {
  SiNextdotjs,
  SiVercel,
  SiSolidity,
  SiTypescript,
  SiJavascript,
  SiStyledcomponents,
  SiEslint,
  SiReact,
} from 'react-icons/si';
import { DiNodejsSmall } from 'react-icons/di';
import React from 'react';
import Link from 'next/link';

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
      <BorderCutCard>
        <Img background={background}>
          <img src={img} alt={title} />
        </Img>
        <Desc>
          <FadeUpWrapper delay={delay}>
            <Text>{desc}</Text>
            <Link href={link} passHref>
              <LinkTo target='_blank' rel='noopener noreferrer'>
                {linkTitle}
              </LinkTo>
            </Link>
            <Skills>
              {techs?.map((x, i) => (
                <React.Fragment key={i}>
                  {x === 'nextjs' && <SiNextdotjs />}
                  {x === 'reactjs' && <SiReact />}
                  {x === 'vercel' && <SiVercel />}
                  {x === 'solidity' && <SiSolidity />}
                  {x === 'emotion' && <img src='/static/icons/emotion-icons.png' alt='emotionsh' />}
                  {x === 'nodejs' && <DiNodejsSmall />}
                  {x === 'typescript' && <SiTypescript />}
                  {x === 'javascript' && <SiJavascript />}
                  {x === 'styledComponents' && <SiStyledcomponents />}
                  {x === 'eslint' && <SiEslint />}
                </React.Fragment>
              ))}
            </Skills>
          </FadeUpWrapper>
        </Desc>
      </BorderCutCard>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div<cardContainerProp>`
  width: ${({ gap }) => gap && `calc((100% - ${gap * 2}px) / 3)`};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  color: white;
  aspect-ratio: 6 / 9;

  > div {
    flex-direction: column;
  }

  @media ${styles.sizes.l} {
    width: calc(50% - 24px);
  }

  @media ${styles.sizes.s} {
    width: 100%;
  }

  @media ${styles.sizes.m} {
    height: 460px;
  }
`;

const Img = styled.div<imgProp>`
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16/12;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background};
  height: 100%;

  img {
    height: 100%;
  }
`;

const Desc = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  > div {
    height: 100%;
    width: 100%;
  }

  > div > div {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const Text = styled.div`
  ${styles.contentFont}
  padding-bottom: 6px;
`;

const LinkTo = styled.a`
  ${styles.contentFont}
  text-decoration: underline;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  padding: 10px 0;
`;

const Skills = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;

  img {
    width: 16px;
    height: 16px;
  }
`;
