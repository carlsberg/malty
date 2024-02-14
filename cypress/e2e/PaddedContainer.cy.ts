import { buildSnapshotName, visit } from 'cypress/support/utils';

const dataTestId = 'padded-container';

describe('<PaddedContainer />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'layout-padded-container--base' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
