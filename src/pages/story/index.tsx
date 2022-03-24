/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Maintenance from '@components/Maintenance/Maintenance';
import image from '@public/static/maintenance.png';

export default function Story() {
  return <Maintenance image={image as any} />;
}
