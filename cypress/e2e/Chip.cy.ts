import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'chip';

describe('<Chip />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'forms-chip--base' });

    page.getByTestId(dataTestId).should('be.visible');
    page.get('#storybook-root').compareSnapshot(buildSnapshotName());
  });

  it('Button', () => {
    const page = visit({ dataTestId, storyId: 'forms-chip--button' });

    page.getByTestId(dataTestId).should('be.visible');
    page.get('#storybook-root').compareSnapshot(buildSnapshotName());
  });

  it('Icon', () => {
    const page = visit({ dataTestId, storyId: 'forms-chip--icon' });

    page.getByTestId(dataTestId).should('be.visible');
    page.get('#storybook-root').compareSnapshot(buildSnapshotName());
  });

  it('Selected', () => {
    const page = visit({ dataTestId, storyId: 'forms-chip--selected' });

    page.getByTestId(dataTestId).should('be.visible');
    page.get('#storybook-root').compareSnapshot(buildSnapshotName());
  });

  it('Disabled', () => {
    const page = visit({ dataTestId, storyId: 'forms-chip--disabled' });

    page.getByTestId(dataTestId).should('be.visible');
    page.get('#storybook-root').compareSnapshot(buildSnapshotName());
  });
});
