import React from 'react';
// import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;

// const Container = styled.div`
//   border: 2px solid red;
// `;
