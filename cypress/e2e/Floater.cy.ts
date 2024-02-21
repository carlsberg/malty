import { buildSnapshotName, visit } from '@/cypress/support/utils';
import { FloaterColor } from '@carlsberggroup/malty.atoms.floater';

const dataTestId = 'floater';

describe('<Floater />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'forms-floater--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - Negative', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-floater--base',
      args: { negative: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Text - Icon Right', () => {
    const page = visit({ dataTestId, storyId: 'forms-floater--text' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Text - Icon left', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-floater--text',
      args: { iconPos: 'Left' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  Object.keys(FloaterColor).forEach((color) => {
    it(`Color - ${color}`, () => {
      const page = visit({
        dataTestId,
        storyId: 'forms-floater--base',
        args: { color }
      });

      page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
    });
  });
});
