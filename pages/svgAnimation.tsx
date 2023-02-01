import styled from '@emotion/styled';
import { KwanSingSVG3 } from '@root/components/Svg/kwansing';
import styles from '@root/styles';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const SvgAnimation = () => {
  // Create a GreenSock timeline that will repeat infinitely
  const tl = gsap.timeline({
    id: 'Timeline',
    repeat: -1,
    repeatDelay: 2.5,
  });

  const colors = ['#e97777', '#ffc777', '#fffad7'];
  function tween(node: any) {
    let path = node;
    const delay = Math.random() * 1;
    const length = path.getTotalLength();
    colors.forEach((color, index) => {
      if (index !== 0) {
        path = path.cloneNode();
        node.parentNode.appendChild(path);
      }
      path.setAttribute('stroke', color);
      tl.set(
        path,
        {
          strokeDasharray: length * 2 + 0.5,
          strokeDashoffset: length * 2 + 0.6,
          autoRound: 'false',
        },
        0
      );
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          autoRound: false,
          duration: 1.7,
          ease: 'power3.out',
        },
        index * 0.25 + delay
      );
    });
  }

  useEffect(() => {
    document
      .querySelectorAll('.motion path, .motion line')
      .forEach((p) => tween(p));
  }, []);

  return (
    <Container>
      <div>
        <h1>Learning the kinetic svg typography</h1>
        <div>Create the text svg from here</div>
        <div>https://www.templatemaker.nl/singlelinetext/</div>
        <div>this website has seperate characters</div>
        <div>to clear unnecessary svg pathing</div>
        <div>https://jakearchibald.github.io/svgomg/</div>
        <SVGcontainer>
          <KwanSingSVG3 cn='motion' />
        </SVGcontainer>
      </div>
    </Container>
  );
};

export default SvgAnimation;

const Container = styled.div`
  ${styles.container}

  > div {
    display: flex;
    flex-direction: column;
    img {
      height: 200px;
      border: 1px solid red;
    }
  }
`;

const SVGcontainer = styled.div`
  height: 200px;
  width: 500px;
  /* outline: 1px solid red; */
`;
