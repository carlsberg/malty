import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'text-area';

describe('<TextArea />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'forms-text-area--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('With error message', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-text-area--base',
      args: { error: 'Error' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-text-area--base',
      args: { disabled: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Required', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-text-area--base',
      args: { required: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled With Error', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-text-area--base',
      args: { disabled: 'true', error: 'Error' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
