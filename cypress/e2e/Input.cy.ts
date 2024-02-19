import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'input';

describe('<Input />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('URL', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--url' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Number', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--number' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Email', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--email' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Password', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--password' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Search', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--search' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Phone', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--phone' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Quantity', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--quantity' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
