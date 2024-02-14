import { buildSnapshotName, expectBackgroundImageIsVisible, visit } from '@/cypress/support/utils';

const dataTestId = 'hero';
// TODO: get this from malty
const backgroundImageUrl = 'https://placehold.co/1400x800';

describe('<Hero />', () => {
  it('Base', () => {
    const page = visit({
      dataTestId,
      storyId: 'layout-hero--hero'
    });

    expectBackgroundImageIsVisible({ dataTestId, url: backgroundImageUrl });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Required', () => {
    const page = visit({
      dataTestId,
      storyId: 'layout-hero--hero',
      variant: 'required'
    });

    expectBackgroundImageIsVisible({ dataTestId, url: backgroundImageUrl });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Actions', () => {
    const page = visit({
      dataTestId,
      storyId: 'layout-hero--hero',
      variant: 'actions'
    });

    expectBackgroundImageIsVisible({ dataTestId, url: backgroundImageUrl });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Scroll', () => {
    const page = visit({
      dataTestId,
      storyId: 'layout-hero--hero',
      variant: 'scroll'
    });

    expectBackgroundImageIsVisible({ dataTestId, url: backgroundImageUrl });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
