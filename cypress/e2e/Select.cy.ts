import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'select';

describe('<Select />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'forms-select--base' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Inline', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-select--inline'
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Readonly', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-select--base',
      args: {
        readOnly: 'true'
      }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Required', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-select--base',
      args: {
        required: 'true'
      }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('With error', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-select--base',
      args: {
        error: 'Fill the value'
      }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});