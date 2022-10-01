import React, { useState } from 'react';
import Link from 'next/link';

import styled from '@emotion/styled';
import styles from '@root/styles';
import FadeUpWrapper from '@root/components/Animation/FadeUpWrapper';
import BorderCutCard from '@root/components/Animation/BorderCutCard';
import Techs from '@root/components/Landing/Cards/Techs';
import useStore from '@root/store';

interface prop {
  background: string;
  title: string;
  desc: string;
  img: string;
  link: string;
  linkTitle: string;
  link2?: string;
  linkTitle2?: string;
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
  const store = useStore();
  const { background, img, title, desc, link, linkTitle, link2, linkTitle2, techs, delay, gap } =
    prop;
  const [hover, setHover] = useState(false);

  return (
    <CardContainer
      gap={gap}
      onMouseEnter={() => {
        setHover(true);
        store.setIsHoveringCard(true);
      }}
      onMouseLeave={() => {
        setHover(false);
        store.setIsHoveringCard(false);
      }}
    >
      <BorderCutCard>
        <Img background={background}>
          <Link href={link} passHref>
            <ImgLink target='_blank' rel='noopener noreferrer'>
              <img src={img} alt={title} />
            </ImgLink>
          </Link>
        </Img>
        <Desc>
          <HoverEffectTR hover={hover} />
          <HoverEffectTL hover={hover} />
          <HoverEffectBL hover={hover} />
          <HoverEffectBR hover={hover} />
          {/* <CardBubbles hover={hover} /> */}
          <FadeUpWrapper delay={delay}>
            <Text>{desc}</Text>
            <div>
              <Link href={link} passHref>
                <LinkTo target='_blank' rel='noopener noreferrer'>
                  {linkTitle}
                </LinkTo>
              </Link>
            </div>
            {link2 && (
              <div>
                <Link href={link2} passHref>
                  <LinkTo target='_blank' rel='noopener noreferrer'>
                    {linkTitle2}
                  </LinkTo>
                </Link>
              </div>
            )}
            <Skills
              onMouseEnter={() => store.setIsHoveringTechs(true)}
              onMouseLeave={() => store.setIsHoveringTechs(false)}
            >
              <Techs techs={techs} />
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

  background: ${({ background }) => background};
  height: 60%;
`;

const ImgLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 40%;
  background: #101010;
  position: relative;

  > div {
    height: 100%;
  }

  > div > div {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const HoverEffectTR = styled.span<{ hover: boolean }>`
  position: absolute;
  top: 8px;
  right: 12px;
  border-right: 1px solid rgb(88, 88, 88);
  border-top: 1px solid rgb(88, 88, 88);
  width: ${({ hover }) => (hover ? '16px' : '0px')};
  height: ${({ hover }) => (hover ? '16px' : '0px')};
  transition: all 0.3s ease-in-out;
`;

const HoverEffectTL = styled.span<{ hover: boolean }>`
  position: absolute;
  top: 8px;
  left: 12px;
  border-left: 1px solid rgb(88, 88, 88);
  border-top: 1px solid rgb(88, 88, 88);
  width: ${({ hover }) => (hover ? '16px' : '0px')};
  height: ${({ hover }) => (hover ? '16px' : '0px')};
  transition: all 0.3s ease-in-out;
`;

const HoverEffectBL = styled.span<{ hover: boolean }>`
  position: absolute;
  bottom: 8px;
  left: 12px;
  border-left: 1px solid rgb(88, 88, 88);
  border-bottom: 1px solid rgb(88, 88, 88);
  width: ${({ hover }) => (hover ? '16px' : '0px')};
  height: ${({ hover }) => (hover ? '16px' : '0px')};
  transition: all 0.3s ease-in-out;
`;

const HoverEffectBR = styled.span<{ hover: boolean }>`
  position: absolute;
  bottom: 8px;
  right: 12px;
  border-right: 1px solid rgb(88, 88, 88);
  border-bottom: 1px solid rgb(88, 88, 88);
  width: ${({ hover }) => (hover ? '16px' : '0px')};
  height: ${({ hover }) => (hover ? '16px' : '0px')};
  transition: all 0.3s ease-in-out;
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
  padding-top: 4px;
  margin: 0;
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
