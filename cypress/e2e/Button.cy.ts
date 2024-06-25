import { buildSnapshotName, visit } from '../support/utils';

const dataTestId = 'button';

describe(`<Button />`, () => {
  it('Primary', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-button--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Secondary', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-button--secondary' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Transparent', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-button--transparent' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Negative', () => {
    const page = visit({ args: { dataTestId, negative: 'true' }, storyId: 'forms-button--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
