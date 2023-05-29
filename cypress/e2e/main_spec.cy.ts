describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.pokemontcg.io/v2/cards/", {
      statusCode: 200,
      fixture: "pokeData.json"})
    cy.visit("http://localhost:3000/")
  })

  it('should go to a base url', () => {
    cy.url().should('include', '/')
  })

  it('should render a heading', () => {
    cy.contains("h1", "POKEMON CARDS!")
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

  it('should display each card with a favorite button', () => {
    cy.get('.single-card-container')
      .contains("Favorite")
  })
})