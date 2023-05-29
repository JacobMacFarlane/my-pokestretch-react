describe('Favorites Page', () => {
    beforeEach(() => {
      cy.intercept("GET", "https://api.pokemontcg.io/v2/cards/", {
        statusCode: 200,
        fixture: "pokeData.json"})
        .visit("http://localhost:3000/")
    })

    it('should go to a favorites url (page) when favorites link is clicked', () => {
        cy.get('a')
        .should('have.attr', 'href')
        .then((href) => {
          cy.visit("http://localhost:3000/favorites")
        })

        cy.url().should('include', '/favorites')
    })
      
    it('should display no Pokemon cards when no favorite button is clicked', () => {
        cy.visit("http://localhost:3000/favorites")
        .get('.single-card-container').should('not.exist');
    });
})
