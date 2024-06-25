import { buildSnapshotName, visit } from '../support/utils';

const dataTestId = 'radio';

describe('<Radio />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-radio--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-radio--disabled' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('ReadOnly', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-radio--read-only' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
