/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from '@mui/material';
import React from 'react';
import Header from '../Navbar/Navbar';

export default function Layout({ children }: any) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
