import { buildSnapshotName, visit } from 'cypress/support/utils';

const dataTestId = 'text';

describe('<Text />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'typography-text--text' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Ellipsis', () => {
    const page = visit({
      dataTestId,
      storyId: 'typography-text--text',
      args: { ellipsis: 'true', width: '100px' }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
