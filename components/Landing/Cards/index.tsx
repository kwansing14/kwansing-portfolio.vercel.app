import Card from '@root/components/Landing/Cards/Card';
import styled from '@emotion/styled';
// import styles from '@root/styles';
import cardContent from '@root/config/cardsContent.json';

const Cards: React.FC = () => {
  return (
    <Container>
      {cardContent.map((x, i) => (
        <Card key={i} {...x} gap={56} />
      ))}
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 56px;
`;
