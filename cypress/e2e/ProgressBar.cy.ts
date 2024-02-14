import { buildSnapshotName, visit } from '@/cypress/support/utils';
import { ProgressBarSize } from '@carlsberggroup/malty.atoms.progress-bar';

const dataTestId = 'progress-bar';

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
