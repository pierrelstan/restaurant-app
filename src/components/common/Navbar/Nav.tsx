/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@mui/material/styles';
import React from 'react';

const Wrapper = styled('nav')(() => ({}));

export default function Nav({ children }: any) {
  return <Wrapper>{children}</Wrapper>;
}
