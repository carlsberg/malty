import { FloaterColor } from '@carlsberggbs/malty.atoms.floater';
import { buildSnapshotName, visit } from '../support/utils';

const dataTestId = 'floater';

describe('<Floater />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-floater--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - Negative', () => {
    const page = visit({
      storyId: 'forms-floater--base',
      args: { negative: 'true', dataTestId }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Text - Icon Right', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-floater--text' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Text - Icon left', () => {
    const page = visit({
      storyId: 'forms-floater--text',
      args: { iconPos: 'Left', dataTestId }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  Object.keys(FloaterColor).forEach((color) => {
    it(`Color - ${color}`, () => {
      const page = visit({
        storyId: 'forms-floater--base',
        args: { color, dataTestId }
      });

      page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
    });
  });
});
