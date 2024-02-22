import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'rating';

describe('<Rating />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'forms-rating--rating' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Total review', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-rating--rating',
      args: { totalReview: '10' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Readonly', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-rating--rating',
      args: { readOnly: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-rating--rating',
      args: { disabled: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});