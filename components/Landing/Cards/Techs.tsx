import React from 'react';
import styled from '@emotion/styled';
import useStore from '@root/store';

import {
  SiNextdotjs,
  SiVercel,
  SiSolidity,
  SiTypescript,
  SiJavascript,
  SiStyledcomponents,
  SiEslint,
  SiReact,
  SiGraphql,
} from 'react-icons/si';
import { DiNodejsSmall } from 'react-icons/di';

interface Prop {
  techs: string[];
}

const Techs: React.FC<Prop> = ({ techs }) => {
  const store = useStore();

  const iconLeave = () => {
    store.setCursorText('');
  };

  return (
    <>
      {techs?.map((x, i) => (
        <React.Fragment key={i}>
          {x === 'nextjs' && (
            <SiNextdotjs
              onMouseEnter={() => store.setCursorText('NextJS')}
              onMouseLeave={() => iconLeave()}
            />
          )}
          {x === 'reactjs' && (
            <SiReact
              onMouseEnter={() => store.setCursorText('ReactJS')}
              onMouseLeave={() => iconLeave()}
            />
          )}
          {x === 'vercel' && (
            <SiVercel
              onMouseEnter={() => store.setCursorText('Vercel')}
              onMouseLeave={() => iconLeave()}
            />
          )}
          {x === 'solidity' && (
            <SiSolidity
              onMouseEnter={() => store.setCursorText('Solidity')}
              onMouseLeave={() => iconLeave()}
            />
          )}
          {x === 'emotion' && (
            <img
              src='/static/icons/emotion-icons.png'
              alt='emotionsh'
              onMouseEnter={() => store.setCursorText('Emotion')}
              onMouseLeave={() => iconLeave()}
            />
          )}
          {x === 'nodejs' && (
            <DiNodejsSmall
              onMouseEnter={() => store.setCursorText('NodeJS')}
              onMouseLeave={() => iconLeave()}
            />
          )}
          {x === 'graphql' && (
            <SiGraphql
              onMouseEnter={() => store.setCursorText('GraphQL')}
              onMouseLeave={() => iconLeave()}
            />
          )}
          {x === 'typescript' && (
            <SiTypescript
              onMouseEnter={() => store.setCursorText('TypeScript')}
              onMouseLeave={() => iconLeave()}
            />
          )}
          {x === 'javascript' && (
            <SiJavascript
              onMouseEnter={() => store.setCursorText('JavaScript')}
              onMouseLeave={() => iconLeave()}
            />
          )}
          {x === 'styledComponents' && (
            <SiStyledcomponents
              onMouseEnter={() => store.setCursorText('Styled Components')}
              onMouseLeave={() => iconLeave()}
            />
          )}
          {x === 'eslint' && (
            <SiEslint
              onMouseEnter={() => store.setCursorText('ESLint')}
              onMouseLeave={() => iconLeave()}
            />
          )}
          {x === 'web3' && (
            <Web3 onMouseEnter={() => store.setCursorText('web3')} onMouseLeave={() => iconLeave()}>
              web3
            </Web3>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default Techs;

const Web3 = styled.div`
  height: 17px;
  font-size: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 2px;
  border-radius: 2px;
  background-color: white;
  color: black;

  font-weight: bold;
  cursor: default;
`;
