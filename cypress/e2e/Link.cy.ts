import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'link';

describe('<Link />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'forms-link--link' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
