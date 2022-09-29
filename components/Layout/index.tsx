import React from 'react';
import styled from '@emotion/styled';
import Header from '@root/components/Layout/Header';
import BottomRight from '@root/components/Layout//BottomRight';
import Footer from '@root/components/Layout//Footer';
import TopLeft from '@root/components/Layout/TopLeft';
import BottomLeft from '@root/components/Layout/BottomLeft';
import TopRight from '@root/components/Layout/TopRight';

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
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
  max-width: 100%;
`;
