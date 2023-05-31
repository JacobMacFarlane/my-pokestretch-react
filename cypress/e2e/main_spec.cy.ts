describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.pokemontcg.io/v2/cards/", {
      statusCode: 200,
      fixture: "pokeData.json"})
      .visit("http://localhost:3000/")
  })

  it('should go to a base url', () => {
    cy.url().should('include', '/')
  })

  it('should render a nav bar', () => {
    cy.get('.nav-header')
      .should('be.visible')
      .should('have.descendants', 'img')
      .should('be.visible')
  });

  it('should render a heading', () => {
    cy.get('.nav-header')
      .contains("h1", "Welcome, Trainer!")
  
    cy.get('.nav-header')
      .contains("h3", "Browse cards and build your deck")
  })

  it('should navigate to the favorites page when user clicks on favorites', () => {
    cy.get('.fav-img').click()
      .url().should('include', '/favorites')
  })

  it('should navigate to the home page when user clicks on "Pokemon Deck Builder"', () => {
    cy.get('.logo-img').click()
      .url().should('include', '/')
  })

  it('should display a list of Pokemon cards', () => {
    cy.get('main')
      .contains("Ampharos")
    cy.get('main')
      .contains("Aerodactyl")
    cy.get('main')
      .contains("Caterpie")

    cy.get('main').find('.single-card-container').should('have.lengthOf', 3)
  })

  it('should display the title and type for each Pokemon card', () => {
    cy.get('.cardInfo').eq(0).contains("Ampharos")
    cy.get('.cardInfo').eq(0).contains("Lightning")

    cy.get('.cardInfo').eq(1).contains("Aerodactyl")
    cy.get('.cardInfo').eq(1).contains("Colorless")

    cy.get('.cardInfo').eq(2).contains("Caterpie")
    cy.get('.cardInfo').eq(2).contains("Grass")
  })

  it('should display each card with a favorite button', () => {
    cy.get('.favorite-button')
      .should('be.visible') 
      .contains("Favorite")
  })

  it('should change the name of the favorite button to "Unfavorite" when button is clicked', () => {
    cy.get('.single-card-container').first()
      .find('.favorite-button').click()
      .should('contain', 'Unfavorite');
  });

  it('should change the name of the favorite button to "Favorite" when button is clicked an even number of times', () => {
    cy.get('.single-card-container').first()
      .find('.favorite-button').click().click()
      .should('contain', 'Favorite');
  })

  it('should display a pokeball icon on the card when the card is favorited', () => {
    cy.get('.favorite-button').first().click()
      .get('.single-card-container').first()
      .should('have.descendants', 'svg')
      .should('be.visible')
  })

  it('should not display a pokeball icon when the card is unfavorited', () => {
    cy.get('.favorite-button').first().click().click()
      .get('.single-card-container').first()
      .should('not.have.descendants', 'svg')
  })
})