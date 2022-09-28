import { useMemo } from 'react';
import styled from '@emotion/styled';
import styles from '@root/styles';
import json from '@root/config/aboutMe.json';

const AboutMe = () => {
  const content = useMemo(() => {
    const [first, second] = json.content.split(json.links.text);
    return (
      <>
        {first}
        <Link href={json.links.href} target='_blank'>
          {json.links.text}
        </Link>
        {second}
      </>
    );
  }, []);

  return (
    <Container>
      <Content>{content}</Content>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div``;

const Content = styled.div`
  ${styles.contentFont};
  max-width: 600px;
`;

const Link = styled.a`
  text-decoration: underline;
  :focus {
    outline: 0;
  }
`;
