import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'overlay';

describe('<Overlay />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'overlays-overlay--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Content', () => {
    const page = visit({ args: { dataTestId }, storyId: 'overlays-overlay--content' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
