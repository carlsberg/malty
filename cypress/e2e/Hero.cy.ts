import { buildSnapshotName, expectBackgroundImageIsVisible, visit } from '@/cypress/support/utils';

const dataTestId = 'hero';
// TODO: get this from malty
const backgroundImageUrl = 'https://placehold.co/1400x800';

describe('<Hero />', () => {
  it('Base', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'layout-hero--base'
    });

    expectBackgroundImageIsVisible({ dataTestId, url: backgroundImageUrl });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Required', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'layout-hero--base'
    });

    expectBackgroundImageIsVisible({ dataTestId, url: backgroundImageUrl });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Actions', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'layout-hero--actions'
    });

    expectBackgroundImageIsVisible({ dataTestId, url: backgroundImageUrl });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Scroll', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'layout-hero--scroll'
    });

    expectBackgroundImageIsVisible({ dataTestId, url: backgroundImageUrl });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
