describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should render the home page and display a message', () => {
    cy.get('.MuiTypography-h2').contains(
      /website currently under maintenance/i
    );
  });
});

export {};
