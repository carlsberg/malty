import { buildSnapshotName, expectImageIsVisible, visit } from '../support/utils';

const dataTestId = 'image';
const wrapperDataTestId = `${dataTestId}-figure`;
const variants = [
  { id: 'top-border', label: 'Top Border' },
  { id: 'bottom-border', label: 'Bottom Border' },
  { id: 'left-border', label: 'Left Border' },
  { id: 'right-border', label: 'Right Border' },
  { id: 'top-gradient', label: 'Top Gradient' },
  { id: 'right-gradient', label: 'Right Gradient' },
  { id: 'bottom-gradient', label: 'Bottom Gradient' },
  { id: 'left-gradient', label: 'Left Gradient' },
  { id: 'fallback', label: 'Fallback' },
  { id: 'fig-caption', label: 'Figcaption' }
];

describe('<Image />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'media-image--base' });

    expectImageIsVisible(dataTestId);

    page.getFullPageWithVisibleTarget(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  variants.forEach((variant) => {
    it(`${variant.label}`, () => {
      const page = visit({
        args: { dataTestId },
        storyId: `media-image--${variant.id}`
      });

      expectImageIsVisible(dataTestId);

      page.getFullPageWithVisibleTarget(wrapperDataTestId).compareSnapshot(buildSnapshotName());
    });
  });
});
