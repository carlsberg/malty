// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getByTestId', (dataTestId) => cy.get(`[data-testid="${dataTestId}"]`));

Cypress.Commands.add('getFullPageWithVisibleTarget', (dataTestId) => {
  return (
    cy
      .getByTestId(dataTestId)
      .should('be.visible')
      /**
       * The `wait` and the timeout on the `then` are needed because the
       * body was blank when the snapshot was taken randomly.
       */
      .wait(100)
      .then({ timeout: Cypress.config('responseTimeout') }, () => {
        return cy.get('body');
      })
  );
});
