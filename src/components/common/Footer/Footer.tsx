/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import React from 'react';
import Facebook from '@public/static/facebook.png';
import Instagram from '@public/static/instagram.png';
import Linkedin from '@public/static/linkedin.png';
import Twitter from '@public/static/twitter.png';
import Link from '../Link';

const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  margin: '5px 15px',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
}));

export default function Footer(): JSX.Element {
  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: '120px',
        textAlign: 'center',
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: '16px',
            color: 'primary.main',
            p: 1,
          }}
        >
          Follow us on:
        </Typography>
      </Box>
      <Box>
        <StyledLink
          variant="button"
          color="primary.main"
          href="https://www.facebook.com"
          passHref={true}
          target="_blank"
        >
          <Image width={15} height={15} src={Facebook} alt={'facebook-logo'} />
        </StyledLink>
        <StyledLink
          variant="button"
          color="primary.main"
          href="https://www.twitter.com"
          passHref={true}
          target="_blank"
        >
          <Image width={15} height={15} src={Twitter} alt={'facebook-logo'} />
        </StyledLink>
        <StyledLink
          variant="button"
          color="primary.main"
          href="https://www.instagram.com"
          passHref={true}
          target="_blank"
        >
          <Image width={15} height={15} src={Instagram} alt={'facebook-logo'} />
        </StyledLink>
        <StyledLink
          variant="button"
          color="primary.main"
          href="https://www.linkiden.com"
          passHref={true}
          target="_blank"
        >
          <Image width={15} height={15} src={Linkedin} alt={'facebook-logo'} />
        </StyledLink>
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: '16px',
            color: 'primary.main',
            p: 1,
          }}
        >
          © 2021 Finsweet | All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
}
