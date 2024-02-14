import { buildSnapshotName, visit } from 'cypress/support/utils';

const dataTestId = 'pill';

describe('<Pill />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'information-pill--base' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Icon', () => {
    const page = visit({ dataTestId, storyId: 'information-pill--icon' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Text', () => {
    const page = visit({ dataTestId, storyId: 'information-pill--text' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
