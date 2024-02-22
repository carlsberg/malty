import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'text';

describe('<Text />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'typography-text--text' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Ellipsis', () => {
    const page = visit({
      storyId: 'typography-text--text',
      args: { dataTestId, ellipsis: 'true', width: '100px' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
