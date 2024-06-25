import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'rating';

describe('<Rating />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-rating--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Total review', () => {
    const page = visit({
      storyId: 'forms-rating--base',
      args: { dataTestId, totalReview: '10' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Readonly', () => {
    const page = visit({
      storyId: 'forms-rating--read-only',
      args: { dataTestId }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled', () => {
    const page = visit({
      storyId: 'forms-rating--disabled',
      args: { dataTestId }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
