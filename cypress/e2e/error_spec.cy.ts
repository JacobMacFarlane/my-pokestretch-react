describe('Error Handling', () => {
    it('should display the error page for random URLs', () => {
      cy.visit('http://localhost:3000/random-url');
  
      cy.contains('h2', 'This isnt our page').should('be.visible');
      cy.contains('.go-back', 'Click here to catch em all!').should('be.visible');
      
    
      cy.get('.go-back').click();
  
      cy.url().should('include', '/');
    });
  });