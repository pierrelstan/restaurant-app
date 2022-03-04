/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import React from 'react';
import Nav from './Nav';
import NavList from './NavList';
import LogoSvg from '../../../../public/static/logo.svg';

const DisplayHeader = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
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
              <NavList />
              <Button
                href="/login/login"
                variant="outlined"
                sx={{ my: 1, mx: 1.4, fontSize: [4, 16], width: 'auto' }}
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
