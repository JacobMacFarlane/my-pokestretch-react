describe('Favorites Page', () => {
    beforeEach(() => {
      cy.intercept("GET", "https://api.pokemontcg.io/v2/cards/", {
        statusCode: 200,
        fixture: "pokeData.json"})
        .visit("http://localhost:3000/")
    })
    
})