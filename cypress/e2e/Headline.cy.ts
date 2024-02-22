import { buildSnapshotName, visit } from '@/cypress/support/utils';
import { HeadlineAlign, HeadlineColor } from '@carlsberggroup/malty.atoms.headline';

const dataTestId = 'headline';

describe('<Headline />', () => {
  it('Base', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'typography-headline--headline'
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  Object.keys(HeadlineAlign).forEach((align) => {
    it(`Align - ${align}`, () => {
      const page = visit({
        storyId: 'typography-headline--headline',
        args: { align, dataTestId }
      });

      page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
    });
  });

  Object.keys(HeadlineColor).forEach((color) => {
    it(`Color - ${color}`, () => {
      const page = visit({
        storyId: 'typography-headline--headline',
        args: { color, dataTestId }
      });

      page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
    });
  });
});
