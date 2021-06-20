// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
  before(() => {
    cy.visit('/');
  });

  it('Visits the app root url', () => {
    cy.get('h1').should('contain', 'Santiago Correa');
  });

  it('toggles theme', () => {
    cy.get('#theme-btn').click({ force: true });
    cy.get('#app')
      .invoke('attr', 'data-theme')
      .should('contain', 'dark');
    cy.get('#theme-btn').click({ force: true });
    cy.get('#app')
      .invoke('attr', 'data-theme')
      .should('contain', 'light');
  });

  it('scrolls to projects', () => {
    cy.contains('Projects').click({ force: true });
    cy.url().should('contain', 'projects');
  });

  it('filters projects correctly', () => {
    cy.get('.c-projects__select').select('React');
    cy.get('[data-aos="zoom-in"]')
      .children()
      .should('not.have.length', 11);
  });
});
