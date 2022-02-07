import * as React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';

type maintenanceProps = any;

export default function Maintenance({ image }: maintenanceProps) {
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
            data-cy="sub-title"
          >
            We are currently working hard on this page!
          </Typography>
        </Box>
        <Box>
          <Image
            src={image}
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
