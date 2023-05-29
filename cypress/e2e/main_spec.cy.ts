describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("https://api.pokemontcg.io/v2/cards/", {fixture: "pokeData.json"})
    cy.visit("http://localhost:3000/")
  })

  it('should go to a base url', () => {
    cy.url().should('include', '/')
  })

  it('should render a heading', () => {
    cy.contains("h1", "Foo")
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
    cy.get('.pokemon-card')
      .contains("Favorite")
  })
})