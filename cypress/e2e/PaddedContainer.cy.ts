import { buildSnapshotName, visit } from '../support/utils';

const dataTestId = 'padded-container';

describe('<PaddedContainer />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'layout-padded-container--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
