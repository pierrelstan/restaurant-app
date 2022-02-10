import { mount } from '@cypress/react'; // or @cypress/vue
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Maintenance from './Maintenance';
import image from '../../../public/static/maintenance.png';
import theme from '../../../styles/theme/theme';

describe('Maintenance', () => {
  beforeEach(() => {
    mount(
      <ThemeProvider theme={theme}>
        <Maintenance image={image} />
      </ThemeProvider>
    );
  });
  it('renders  title', async () => {
    cy.viewport(1440, 700);
    await (() => {
      cy.get('[data-cy=sub-title]').should('exist');
    });
  });
});
