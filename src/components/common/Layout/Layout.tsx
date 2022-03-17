/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from '@mui/material';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Navbar/Navbar';

export default function Layout({ children }: any) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
      }}
    >
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
