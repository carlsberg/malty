import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'toggle';

describe('<Toggle />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-toggle--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled', () => {
    const page = visit({
      storyId: 'forms-toggle--disabled',
      args: { dataTestId }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Required', () => {
    const page = visit({
      storyId: 'forms-toggle--base',
      args: { dataTestId, required: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('With error', () => {
    const page = visit({
      storyId: 'forms-toggle--base',
      args: { dataTestId, error: 'Error' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Checked', () => {
    const page = visit({
      storyId: 'forms-toggle--checked',
      args: { dataTestId }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
