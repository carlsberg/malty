import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'pill';

describe('<Pill />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'information-pill--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Only Icon', () => {
    const page = visit({ args: { dataTestId }, storyId: 'information-pill--only-icon' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Text With Leading Icon', () => {
    const page = visit({ args: { dataTestId }, storyId: 'information-pill--text-with-leading-icon' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Text With Trailing Icon', () => {
    const page = visit({ args: { dataTestId }, storyId: 'information-pill--text-with-trailing-icon' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
