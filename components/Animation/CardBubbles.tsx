import styled from '@emotion/styled';

interface Prop {
  hover: boolean;
}

const CardBubbles: React.FC<Prop> = ({ hover }) => {
  const Bubbles = [
    { x: 0, y: 0, s: 1, d: 0 },
    { x: 0, y: 8, s: 1, d: 2 },
    { x: 0, y: 16, s: 1, d: 4 },
    { x: 0, y: 24, s: 1, d: 6 },

    { x: 8, y: 0, s: 1, d: 2 },
    { x: 8, y: 8, s: 1, d: 4 },
    { x: 8, y: 16, s: 1, d: 6 },

    { x: 16, y: 0, s: 1, d: 4 },
    { x: 16, y: 8, s: 1, d: 6 },

    { x: 24, y: 0, s: 1, d: 6 },
  ];

  return (
    <>
      {Bubbles.map((x, i) => (
        <Bubble hover={hover} {...x} key={i} />
      ))}
    </>
  );
};

export default CardBubbles;

interface bubbleProp {
  x: number;
  y: number;
  s: number;
  d: number;
  hover: boolean;
}

const Bubble = styled.span<bubbleProp>`
  position: absolute;

  right: ${({ x }) => x + 12}px;
  bottom: ${({ y }) => y + 8}px;
  border: 1px solid rgb(88, 88, 88);
  width: ${({ hover }) => (hover ? '4px' : '0px')};
  height: ${({ hover }) => (hover ? '4px' : '0px')};
  border-radius: 50%;
  scale: ${({ s }) => s};
  opacity: ${({ hover }) => (hover ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  transition: ${({ d }) => d}00ms;
`;
