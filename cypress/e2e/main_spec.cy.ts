describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.pokemontcg.io/v2/cards/", {
      statusCode: 200,
      fixture: "pokeData.json"}).as("pokeDataRequest");
    cy.visit("http://localhost:3000/");
    cy.wait("@pokeDataRequest")
    cy.document().should("have.property", "readyState").and("eq", "complete");
  })

  it('should go to a base url', () => {
    cy.url().should('include', '/')
  })

  it('should render a heading', () => {
    cy.contains("h1", "POKEMON CARDS!")
    cy.contains("h3", "Browse cards and build your deck")
  })

  it('should render a link to navigate to the favorites page', () => {
    cy.get('nav')
      .contains("Favorites")
  })

  it('should display a list of Pokemon cards', () => {
    cy.get('main')
    .contains("Ampharos")
    cy.get('main')
    .contains("Aerodactyl")
    cy.get('main')
    .contains("Caterpie")
    cy.get('main')
    .should('have.length.of.at.least', 3)
  })

  it('should display the title and type for each Pokemon card', () => {
    cy.get('.cardInfo').eq(0).contains("Ampharos")
    cy.get('.cardInfo').eq(0).contains("Lightning")
  })

  it('should display each card with a favorite button', () => {
    cy.get('.favorite-button')
      .contains("Favorite")
  })
})