import { buildSnapshotName, visit } from '../support/utils';

const dataTestId = 'pill';

describe('<Pill />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'information-pill--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Icon', () => {
    const page = visit({ args: { dataTestId }, storyId: 'information-pill--icon' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Text', () => {
    const page = visit({ args: { dataTestId }, storyId: 'information-pill--text' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
