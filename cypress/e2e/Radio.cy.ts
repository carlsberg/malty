import { buildSnapshotName, visit } from 'cypress/support/utils';

const dataTestId = 'radio';

describe('<Radio />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'forms-radio--base' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled', () => {
    const page = visit({ dataTestId, storyId: 'forms-radio--disabled' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('ReadOnly', () => {
    const page = visit({ dataTestId, storyId: 'forms-radio--read-only' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
