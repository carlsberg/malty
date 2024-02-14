import { buildSnapshotName, visit } from 'cypress/support/utils';

const dataTestId = 'label';

describe('<Label />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'forms-label--label' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
