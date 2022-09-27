import React from 'react';
import styled from '@emotion/styled';
// import Background from '@root/components/Layout/Background';
import Header from '@root/components/Layout/Header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      {/* <Background /> */}
      {children}
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
`;
