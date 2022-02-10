import { Link } from '@mui/material';
import React from 'react';

export default function Error() {
  return (
    <div>
      <h1>404</h1>
      <h3>Looks like you&apos;re lost</h3>
      <p>Page you are looking for is missing.</p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </div>
  );
}
