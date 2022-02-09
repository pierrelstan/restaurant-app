import { mount } from '@cypress/react'; // or @cypress/vue
import React from 'react';
import Maintenance from './Maintenance';
import image from '../../../public/static/maintenance.png';

describe('Maintenance', () => {
  beforeEach(() => {
    mount(<Maintenance image={image} />);
  });
  it('renders  title', async () => {
    cy.viewport(1440, 700);
    await (() => {
      cy.get('[data-cy=sub-title]').should('exist');
    });
  });
});
