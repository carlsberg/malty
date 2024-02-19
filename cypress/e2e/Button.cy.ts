import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'button';

describe(`<Button />`, () => {
  it('Primary', () => {
    const page = visit({ dataTestId, storyId: 'forms-button--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Secondary', () => {
    const page = visit({ dataTestId, storyId: 'forms-button--secondary' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Transparent', () => {
    const page = visit({ dataTestId, storyId: 'forms-button--transparent' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
