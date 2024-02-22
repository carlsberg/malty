import { buildSnapshotName, expectImageIsVisible, visit } from '@/cypress/support/utils';

const dataTestId = 'card';
const imageDataTestId = 'image';

describe('<Card />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'cards-card--base' });

    expectImageIsVisible(imageDataTestId);

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Shadowed', () => {
    const page = visit({ args: { dataTestId }, storyId: 'cards-card--shadowed' });

    expectImageIsVisible(imageDataTestId);

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Landscape', () => {
    const page = visit({ args: { dataTestId }, storyId: 'cards-card--landscape' });

    expectImageIsVisible(imageDataTestId);

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Selected', () => {
    const page = visit({ args: { dataTestId }, storyId: 'cards-card--selected' });

    expectImageIsVisible(imageDataTestId);

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('On click', () => {
    const page = visit({ args: { dataTestId }, storyId: 'cards-card--on-click' });

    expectImageIsVisible(imageDataTestId);

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
