import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'rating';

describe('<Rating />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-rating--rating' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Total review', () => {
    const page = visit({
      storyId: 'forms-rating--rating',
      args: { dataTestId, totalReview: '10' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Readonly', () => {
    const page = visit({
      storyId: 'forms-rating--rating',
      args: { dataTestId, readOnly: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled', () => {
    const page = visit({
      storyId: 'forms-rating--rating',
      args: { dataTestId, disabled: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
