import * as React from 'react';
import { mount } from '@cypress/react'; // or @cypress/vue
import Maintenance from '../../src/components/Maintenance';
import image from '../../images/maintenance.png';

describe('Maintenance', () => {
  beforeEach(() => {
    mount(<Maintenance image={image} />);
  });
  it('renders  title', () => {
    cy.get('[data-cy=sub-title]').should('exist');
  });
});
