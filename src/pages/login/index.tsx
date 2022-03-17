/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextPage } from 'next';
import * as React from 'react';
import image from '../../../public/static/maintenance.png';
import Maintenance from '../../components/Maintenance/Maintenance';

const Login: NextPage = () => {
  return <Maintenance image={image as any} />;
};

export default Login;
