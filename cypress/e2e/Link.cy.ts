import { buildSnapshotName, visit } from '../support/utils';

const dataTestId = 'link';

describe('<Link />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-link--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
