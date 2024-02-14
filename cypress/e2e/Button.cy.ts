import { buildSnapshotName, visit } from 'cypress/support/utils';

const dataTestId = 'button';
const viewportPresets: Cypress.ViewportPreset[] = ['iphone-6+', 'macbook-11'];

describe(`<Button />`, () => {
  it.each(viewportPresets)('Primary - %s', (viewportPreset) => {
    cy.viewport(viewportPreset);

    const page = visit({ dataTestId, storyId: 'forms-button--base' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it.each(viewportPresets)('Secondary - %s', (viewportPreset) => {
    cy.viewport(viewportPreset);

    const page = visit({ dataTestId, storyId: 'forms-button--secondary' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it.each(viewportPresets)('Transparent - %s', (viewportPreset) => {
    cy.viewport(viewportPreset);

    const page = visit({ dataTestId, storyId: 'forms-button--transparent' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
