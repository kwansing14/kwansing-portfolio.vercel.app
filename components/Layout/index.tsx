import React from 'react';
import styled from '@emotion/styled';
import Header from '@root/components/Layout/Header';
import Footer from '@root/components/Layout//Footer';
// import FloatingText from '@root/components/Layout/FloatingText';

import BottomRight from '@root/components/Layout//BottomRight';
import TopLeft from '@root/components/Layout/TopLeft';
import BottomLeft from '@root/components/Layout/BottomLeft';
import TopRight from '@root/components/Layout/TopRight';
import DivOnCursor from '@root/components/Layout/DivOnCursor';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      <BottomLeft />
      <BottomRight />
      <TopLeft />
      <TopRight />
      <DivOnCursor />
      {/* <FloatingText /> */}
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
  max-width: 100%;
  background-color: #101010;
  /* background-color: navy; */
`;
