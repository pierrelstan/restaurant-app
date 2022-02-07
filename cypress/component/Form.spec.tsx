import * as React from 'react';
import { mount } from '@cypress/react'; // or @cypress/vue
import Maintenance from '../../src/components/Maintenance';

describe('Maintenance', () => {
  beforeEach(() => {
    // given
    mount(<Maintenance />);
  });
  it('renders  title', () => {
    cy.get('[data-cy=sub-title]').should('exist');
  });
});
