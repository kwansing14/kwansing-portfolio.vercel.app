import React from 'react';
import styled from '@emotion/styled';
import Header from '@root/components/Layout/Header';
import BottomRight from '@root/components/Layout//BottomRight';
import Footer from '@root/components/Layout//Footer';
import TopLeft from '@root/components/Layout/TopLeft';
import BottomLeft from './BottomLeft';

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
