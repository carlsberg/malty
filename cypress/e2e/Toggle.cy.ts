import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'toggle';

describe('<Toggle />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-toggle--toggle' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled', () => {
    const page = visit({
      storyId: 'forms-toggle--toggle',
      args: { dataTestId, disabled: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Required', () => {
    const page = visit({
      storyId: 'forms-toggle--toggle',
      args: { dataTestId, required: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('With error', () => {
    const page = visit({
      storyId: 'forms-toggle--toggle',
      args: { dataTestId, error: 'Error' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
