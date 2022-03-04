/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import React from 'react';
import Facebook from '../../../../public/static/facebook.png';
import Instagram from '../../../../public/static/instagram.png';
import Linkedin from '../../../../public/static/linkedin.png';
import LogoSvg from '../../../../public/static/logo.svg';
import Twitter from '../../../../public/static/twitter.png';
import Link from '../Link';
import Nav from '../Navbar/Nav';
import NavList from '../Navbar/NavList';

const Logo = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

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
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            height: 100,
          }}
        >
          <Logo sx={{ flexGrow: 1 }}>
            <Image
              src={LogoSvg as any}
              alt="yaya-logo"
              width="70"
              height="70"
            />
          </Logo>
        </Box>
        <Nav>
          <NavList />
        </Nav>

        <Box
          sx={{
            mt: 4,
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
              © 2021 Finsweet | All rights reserved.
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
              <Image
                width={15}
                height={15}
                src={Facebook}
                alt={'facebook-logo'}
              />
            </StyledLink>
            <StyledLink
              variant="button"
              color="primary.main"
              href="https://www.twitter.com"
              passHref={true}
              target="_blank"
            >
              <Image
                width={15}
                height={15}
                src={Twitter}
                alt={'facebook-logo'}
              />
            </StyledLink>
            <StyledLink
              variant="button"
              color="primary.main"
              href="https://www.instagram.com"
              passHref={true}
              target="_blank"
            >
              <Image
                width={15}
                height={15}
                src={Instagram}
                alt={'facebook-logo'}
              />
            </StyledLink>
            <StyledLink
              variant="button"
              color="primary.main"
              href="https://www.linkiden.com"
              passHref={true}
              target="_blank"
            >
              <Image
                width={15}
                height={15}
                src={Linkedin}
                alt={'facebook-logo'}
              />
            </StyledLink>
          </Box>
          <Box>
            <StyledLink
              variant="button"
              color="primary.main"
              href="/contact/contact"
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: '16px',
                  color: 'primary.main',
                  p: 1,
                }}
              >
                Contact Us
              </Typography>
            </StyledLink>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
