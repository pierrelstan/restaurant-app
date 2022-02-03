import * as React from 'react';
import { Container } from '@mui/material';
import type { NextPage } from 'next';
import Maintenance from '../src/components/Maintenance';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Maintenance />
    </Container>
  );
};

export default Home;
