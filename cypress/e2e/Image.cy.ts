import { buildSnapshotName, expectImageIsVisible, visit } from '@/cypress/support/utils';

const dataTestId = 'image';
const wrapperDataTestId = `${dataTestId}-figure`;
const variants = [
  'topborder',
  'rightborder',
  'bottomborder',
  'leftborder',
  'topgradient',
  'rightgradient',
  'bottomgradient',
  'leftgradient',
  'fallback',
  'figcaption'
];

describe('<Image />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'media-image--image' });

    expectImageIsVisible(dataTestId);

    page.getByTestId(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it.each(variants)('Variant - %s', (variant) => {
    const page = visit({
      dataTestId,
      storyId: 'media-image--image',
      variant
    });

    expectImageIsVisible(dataTestId);

    page.getByTestId(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });
});
