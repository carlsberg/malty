/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Get element by data-testid attribute
     * @example
     * cy.getByTestId('new-item')
     */
    getByTestId(dataTestId: string): Chainable<any>;
  }
}
