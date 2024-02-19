import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'toggle';

describe('<Toggle />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'forms-toggle--toggle' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-toggle--toggle',
      args: { disabled: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Required', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-toggle--toggle',
      args: { required: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('With error', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-toggle--toggle',
      args: { error: 'Error' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
