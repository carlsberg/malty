/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Get element by data-testid attribute
     * @example
     * cy.getByTestId('new-item')
     */
    getByTestId(dataTestId: string): Chainable<Subject>;
    /**
     * Get full page using body tag and wait for target element to be visible
     * @example
     * cy.getFullPageWithVisibleTarget()
     */
    getFullPageWithVisibleTarget(targetDataTestId: string): Chainable<Subject>;
  }
}
