import { ProgressBarSize } from '@carlsberggbs/malty.atoms.progress-bar';
import { buildSnapshotName, visit } from '../support/utils';

const dataTestId = 'progress-bar';

describe('<ProgressBar />', () => {
  it('Base', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'progress-indicators-progress-bar--base'
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - Without amount', () => {
    const page = visit({
      storyId: 'progress-indicators-progress-bar--base',
      args: { displayAmount: '!false', dataTestId }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - Disabled', () => {
    const page = visit({
      storyId: 'progress-indicators-progress-bar--disabled',
      args: { dataTestId }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  Object.keys(ProgressBarSize).forEach((size) => {
    it(`Size - ${size}`, () => {
      const page = visit({
        storyId: 'progress-indicators-progress-bar--base',
        args: { size, dataTestId }
      });

      page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
    });
  });
});
