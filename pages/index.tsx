import { Container } from '@mui/material';
import type { NextPage } from 'next';
import * as React from 'react';
import image from '../public/static/maintenance.png';
import Maintenance from '../src/components/Maintenance/Maintenance';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Maintenance image={image} />
    </Container>
  );
};

export default Home;
