import * as React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';
import maintenanceImage from '../../images/maintenance.png';

export default function Maintenance() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: '800',
            }}
          >
            Website currently under maintenance
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#637381',
            }}
          >
            We are currently working hard on this page!
          </Typography>
        </Box>
        <Box>
          <Image
            src={maintenanceImage}
            objectFit="contain"
            alt="maintenance-image"
            width={350}
            height={350}
          />
        </Box>
      </Box>
    </Container>
  );
}
