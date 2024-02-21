import { buildSnapshotName, visit } from '@/cypress/support/utils';
import { HeadlineAlign, HeadlineColor } from '@carlsberggroup/malty.atoms.headline';

const dataTestId = 'headline';

describe('<Headline />', () => {
  it('Base', () => {
    const page = visit({
      dataTestId,
      storyId: 'typography-headline--headline'
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  Object.keys(HeadlineAlign).forEach((align) => {
    it(`Align - ${align}`, () => {
      const page = visit({
        dataTestId,
        storyId: 'typography-headline--headline',
        args: { align }
      });

      page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
    });
  });

  Object.keys(HeadlineColor).forEach((color) => {
    it(`Color - ${color}`, () => {
      const page = visit({
        dataTestId,
        storyId: 'typography-headline--headline',
        args: { color }
      });

      page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
    });
  });
});
