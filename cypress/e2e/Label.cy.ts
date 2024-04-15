import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'label';

describe('<Label />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-label--label' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});