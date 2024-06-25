import { buildSnapshotName, visit } from '../support/utils';

const dataTestId = 'label';

describe('<Label />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-label--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
