import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'overlay';

describe('<Overlay />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'overlays-overlay--base' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Content', () => {
    const page = visit({ dataTestId, storyId: 'overlays-overlay--content' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
