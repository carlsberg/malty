import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'input';

describe('<Input />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--base' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('URL', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--url' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Number', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--number' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Email', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--email' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Password', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--password' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Search', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--search' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Phone', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--phone' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Quantity', () => {
    const page = visit({ dataTestId, storyId: 'forms-input--quantity' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
