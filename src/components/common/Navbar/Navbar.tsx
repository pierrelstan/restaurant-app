/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import React from 'react';
import LogoSvg from '../../../../public/static/logo.svg';
import Link from '../Link';

const Nav = styled('nav')(() => ({}));

const DisplayHeader = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  margin: '5px 15px',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
}));

const Logo = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          backgroundColor: 'background.default',
          color: 'primary.main',
        }}
      >
        <DisplayHeader>
          <Toolbar sx={{ flexWrap: 'wrap', flexGrow: 1 }}>
            <Logo sx={{ flexGrow: 1 }}>
              <Image
                src={LogoSvg as any}
                alt="yaya-logo"
                width="70"
                height="70"
              />
            </Logo>

            <Nav>
              <StyledLink
                variant="button"
                color="primary.main"
                href="/"
                sx={{
                  fontSize: [4, 16],
                }}
              >
                Home
              </StyledLink>
              <StyledLink
                variant="button"
                color="primary.main"
                href="/menu/menu"
                sx={{
                  fontSize: [4, 16],
                }}
              >
                Menu
              </StyledLink>
              <StyledLink
                variant="button"
                color="primary.main"
                href="/about/about"
                sx={{
                  fontSize: [4, 16],
                }}
              >
                About us
              </StyledLink>
              <StyledLink
                variant="button"
                color="primary.main"
                href="/story/story"
                sx={{
                  fontSize: [4, 16],
                }}
              >
                Our story
              </StyledLink>
              <StyledLink
                variant="button"
                color="primary.main"
                href="/blog/blog"
                sx={{
                  fontSize: [4, 16],
                }}
              >
                Blog
              </StyledLink>
              <StyledLink
                variant="button"
                color="primary.main"
                href="/contact/contact"
                sx={{
                  fontSize: [4, 16],
                }}
              >
                Contact
              </StyledLink>
              <Button
                href="/login/login"
                variant="outlined"
                sx={{ my: 1, mx: 1.4, fontSize: [4, 16] }}
              >
                Login
              </Button>
            </Nav>
          </Toolbar>
        </DisplayHeader>
      </AppBar>
    </>
  );
}
