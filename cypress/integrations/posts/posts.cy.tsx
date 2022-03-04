describe('get post by id', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/posts/6208486ec2229a4228f4ba1f');
  });

  it('should have the name of the owner', () => {
    cy.get('p').contains(/owner: stanle/i);
  });
});

export {};
