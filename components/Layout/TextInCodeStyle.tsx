import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const TextInCodeStyle = () => {
  const hungry = true;
  const eat = () => {};

  if (hungry) {
    eat();
  }

  const codeText = 'if (hungry) { eat(); }';
  const codeText2 = 'if (tired) { sleep(); }';
  const codeText3 = 'if (bored) { code(); }';

  const checkCode = (x: string) => {
    if (x[0] === '(') {
      const x2 = x.split('');
      x2.pop();
      x2.shift();
      return (
        <Span2>
          (<Span3>{x2.join('')}</Span3>){' '}
        </Span2>
      );
    }
    if (x === '{') {
      return `${x}\n  `;
    }
    if (x === '}') {
      return `\n${x}`;
    }
    if (x.includes('(')) {
      const [x1, x2] = x.split('(');
      const x3 = x2.split('');
      x3.pop();
      return (
        <>
          <Span4>
            {x1}
            <Span5>({x3}</Span5>
          </Span4>
          ;
        </>
      );
    }
    return `${x} `;
  };

  return (
    <>
      <Container>
        {codeText.split(' ').map((x, index) => (
          <Span1 key={index}>{checkCode(x)}</Span1>
        ))}
      </Container>
      <br />
      <br />
      {codeText2.split(' ').map((x, index) => (
        <Span1 key={index}>{checkCode(x)}</Span1>
      ))}
      <br />
      <br />
      {codeText3.split(' ').map((x, index) => (
        <Span1 key={index}>{checkCode(x)}</Span1>
      ))}
      <Type />
    </>
  );
};

export default TextInCodeStyle;

const color1 = '#BD93E2';
const color2 = '#CC76D1';
const color3 = '#fff';
const color4 = '#88A6F5';
const color5 = '#4A9DF8';

const blinkblink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const highlight = keyframes`
  0% {
    background-color: none;
  }
  100% {
    background-color: #617CA1;
  }
`;

const Type = styled.span`
  border-right: 1px solid rgba(255, 255, 255, 0.75);
  animation: ${blinkblink} 1s steps(1) infinite;
`;

const spanStyle = css`
  font-size: 16px;
  line-height: 24px;
  font-family: Source Code Pro;
  white-space: pre;
`;

const Container = styled.span`
  position: relative;
  border: 1px solid white;

  /* ::after {
    border: 2px solid red;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rebeccapurple;
  } */
`;

const Span1 = styled.span`
  color: ${color1};
  ${spanStyle}
`;

const Span2 = styled.span`
  color: ${color2};
  ${spanStyle}
`;

const Span3 = styled.span`
  color: ${color3};
  ${spanStyle}
`;

const Span4 = styled.span`
  color: ${color4};
  ${spanStyle}
`;

const Span5 = styled.span`
  color: ${color5};
  ${spanStyle}
`;
