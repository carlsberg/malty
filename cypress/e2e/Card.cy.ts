import { buildSnapshotName, expectImageIsVisible, visit } from '@/cypress/support/utils';

const dataTestId = 'card';
const imageDataTestId = 'image';

describe('<Card />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'cards-card--base' });

    expectImageIsVisible(imageDataTestId);

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Shadowed', () => {
    const page = visit({ dataTestId, storyId: 'cards-card--shadowed' });

    expectImageIsVisible(imageDataTestId);

    // TODO: discuss with team if we should use #storybook-root everywhere or only where there's shadow
    page.get('#storybook-root').compareSnapshot(buildSnapshotName());
  });

  it('Landscape', () => {
    const page = visit({ dataTestId, storyId: 'cards-card--landscape' });

    expectImageIsVisible(imageDataTestId);

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Selected', () => {
    const page = visit({ dataTestId, storyId: 'cards-card--selected' });

    expectImageIsVisible(imageDataTestId);

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('On click', () => {
    const page = visit({ dataTestId, storyId: 'cards-card--on-click' });

    expectImageIsVisible(imageDataTestId);

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
