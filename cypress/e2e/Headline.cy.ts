import { HeadlineAlign, HeadlineColor } from '@carlsberggbs/malty.atoms.headline';
import { buildSnapshotName, visit } from '../support/utils';

const dataTestId = 'headline';

describe('<Headline />', () => {
  it('Base', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'typography-headline--base'
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  Object.keys(HeadlineAlign).forEach((align) => {
    it(`Align - ${align}`, () => {
      const page = visit({
        storyId: 'typography-headline--base',
        args: { align, dataTestId }
      });

      page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
    });
  });

  Object.keys(HeadlineColor).forEach((color) => {
    it(`Color - ${color}`, () => {
      const page = visit({
        storyId: 'typography-headline--base',
        args: { color, dataTestId }
      });

      page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
    });
  });
});
