/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextPage } from 'next';
import * as React from 'react';
import Maintenance from '@components/Maintenance/Maintenance';
import image from '@public/static/maintenance.png';

const Blog: NextPage = () => {
  return <Maintenance image={image as any} />;
};

export default Blog;
