import styled from '@emotion/styled';
import styles from '@root/styles';

const Experiences = () => {
  return (
    <Container>
      <Section>
        <Left>
          <Location>Frontend Developer at Aleph Labs</Location>
          <Date>2020 March - Present</Date>
        </Left>
      </Section>
      <Section>
        <Left>
          <Location>Software Engineering Immersive Course @ General Assembly</Location>
          <Date>2020 March - 2020 June</Date>
        </Left>
      </Section>
    </Container>
  );
};

export default Experiences;

const Container = styled.div``;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Date = styled.div``;
const Location = styled.div``;

const Right = styled.div``;

const Section = styled.div`
  ${styles.contentFont}
  display: flex;
  gap: 24px;
  max-width: 1000px;
  padding-bottom: 48px;
`;
