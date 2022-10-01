import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import useStore from '@root/store';

const DivOnCursor = () => {
  const store = useStore();
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <Container
      h={store.isHoveringCard}
      h2={store.cursorText !== ''}
      x={mousePosition.x ?? 0}
      y={mousePosition.y ?? 0}
    >
      {store.cursorText}
      <LineStyle h={store.cursorText !== ''} />
      <LineStyle2 h={store.cursorText !== ''} />
      <DiagonalLine h={store.cursorText !== ''} />
      <DotStyle h={store.isHoveringCard} />
    </Container>
  );
};

export default DivOnCursor;

interface StyleProp {
  h: boolean;
  h2: boolean;
  x: number;
  y: number;
}

const widthExpand0 = keyframes`
  from { width: 0px; }
  to { width: calc(100%); }
`;

const widthExpand1 = keyframes`
  from { width: 0px; }
  to { width: calc(100% - 32px); }
`;

const widthExpand2 = keyframes`
  from { 
    width: 0px; 
    opacity: 1
  }
  to { 
    width: calc(100% - 46px); 
    opacity: 1;
  }
`;

const Container = styled.div<StyleProp>`
  position: fixed;
  display: ${({ h }) => (h ? 'flex' : 'none')};
  top: ${({ y }) => y - 32}px;
  left: ${({ x }) => x + 12}px;
  height: 40px;
  padding-top: 8px;
  padding-left: 32px;
  padding-right: 32px;
  background: ${({ h2 }) => (h2 ? 'rgba(0, 0, 0, 0.2)' : '0')};
  z-index: 4;
  color: white;
  font-size: 12px;
  width: auto;
`;

const DiagonalLine = styled.div<{ h: boolean }>`
  width: 15px;
  rotate: -35deg;
  height: 1px;
  background: none;
  position: absolute;
  left: 3px;
  bottom: 8px;
  display: block;

  ::after {
    display: ${({ h }) => (h ? 'block' : 'none')};
    position: absolute;
    content: '';
    height: 1px;
    background: white;
    width: 0px;
    animation: ${widthExpand0} 0.3s ease-in-out forwards;
  }
`;

const LineStyle = styled.div<{ h: boolean }>`
  position: absolute;
  bottom: 12px;
  left: 16px;
  height: 1px;
  width: 0px;
  display: ${({ h }) => (h ? 'block' : 'none')};
  animation: ${widthExpand1} 0.3s ease-in-out 0.3s forwards;
  border-top: 1px solid white;
`;

const LineStyle2 = styled.div<{ h: boolean }>`
  position: absolute;
  bottom: 12px;
  height: 2px;
  left: 30px;
  width: 0px;
  opacity: 0;
  display: ${({ h }) => (h ? 'block' : 'none')};
  animation: ${widthExpand2} 0.2s ease-in-out 0.4s forwards;
  border-bottom: 2px solid white;
  border-left: 4px solid rgba(0, 0, 0, 0);
`;

const DotStyle = styled.span<{ h: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  bottom: 0;
  left: 0;
  position: absolute;
  border: 1px solid white;
`;
