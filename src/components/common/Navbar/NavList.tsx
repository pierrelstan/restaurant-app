import { styled } from '@mui/material/styles';
import React from 'react';
import Link from '../Link';

const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  margin: '5px 15px',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
}));

export default function NavList() {
  return (
    <>
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
    </>
  );
}
