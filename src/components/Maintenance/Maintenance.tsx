import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import { maintenanceProps } from '../../types/types';

export default function Maintenance({ image }: maintenanceProps) {
  console.log(image);
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: 'background.default',
      }}
    >
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
              color: 'primary.main',
            }}
          >
            Website currently under maintenance
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'primary.light',
            }}
            data-cy="sub-title"
          >
            We are currently working hard on this page!
          </Typography>
        </Box>
        <Box>
          <Image
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            src={image as any}
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
