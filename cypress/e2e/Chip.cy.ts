import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'chip';

describe('<Chip />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-chip--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Button', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-chip--button' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Icon', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-chip--icon' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Selected', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-chip--selected' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-chip--disabled' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
