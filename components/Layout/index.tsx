import React from 'react';
import styled from '@emotion/styled';
// import Background from '@root/components/Layout/Background';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {/* <Background /> */}
      {children}
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
`;
