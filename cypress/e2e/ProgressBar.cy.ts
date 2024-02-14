import { buildSnapshotName, visit } from 'cypress/support/utils';

const dataTestId = 'progress-bar';

// TODO: this should come from malty
export enum ProgressBarSize {
  Small = 'Small',
  Medium = 'Medium'
}

describe('<ProgressBar />', () => {
  it('Base', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-bar--progress-ba'
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - Without amount', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-bar--progress-ba',
      args: { displayAmount: '!false' }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - Disabled', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-bar--progress-ba',
      args: { disabled: 'true' }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it.each(Object.keys(ProgressBarSize))('Size - %s', (size) => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-bar--progress-ba',
      args: { size }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
