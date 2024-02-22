import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'select';

describe('<Select />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-select--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Inline', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'forms-select--inline'
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Readonly', () => {
    const page = visit({
      storyId: 'forms-select--base',
      args: { dataTestId, readOnly: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Required', () => {
    const page = visit({
      storyId: 'forms-select--base',
      args: { dataTestId, required: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('With error', () => {
    const page = visit({
      storyId: 'forms-select--base',
      args: { dataTestId, error: 'Fill the value' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
