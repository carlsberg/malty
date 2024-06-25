import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'text-area';

describe('<TextArea />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-text-area--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('With error message', () => {
    const page = visit({
      storyId: 'forms-text-area--base',
      args: { dataTestId, error: 'Error' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled', () => {
    const page = visit({
      storyId: 'forms-text-area--base',
      args: { dataTestId, disabled: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Required', () => {
    const page = visit({
      storyId: 'forms-text-area--base',
      args: { dataTestId, required: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled With Error', () => {
    const page = visit({
      storyId: 'forms-text-area--base',
      args: { dataTestId, disabled: 'true', error: 'Error' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
