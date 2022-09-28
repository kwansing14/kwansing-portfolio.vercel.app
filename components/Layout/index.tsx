import React from 'react';
import styled from '@emotion/styled';
// import Background from '@root/components/Layout/Background';
import Header from '@root/components/Layout/Header';
// import SmallBox from '@root/components/Layout/SmallBox';
import BottomRightLinks from './BottomRight';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      {/* <SmallBox /> */}
      {children}
      <BottomRightLinks />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
`;
