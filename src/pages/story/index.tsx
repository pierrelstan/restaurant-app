/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import image from '../../../public/static/maintenance.png';
import Maintenance from '../../components/Maintenance/Maintenance';

export default function Story() {
  return <Maintenance image={image as any} />;
}
