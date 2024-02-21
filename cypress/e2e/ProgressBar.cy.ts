import { buildSnapshotName, visit } from '@/cypress/support/utils';
import { ProgressBarSize } from '@carlsberggroup/malty.atoms.progress-bar';

const dataTestId = 'progress-bar';

describe('<ProgressBar />', () => {
  it('Base', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-bar--progress-ba'
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - Without amount', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-bar--progress-ba',
      args: { displayAmount: '!false' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - Disabled', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-bar--progress-ba',
      args: { disabled: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  Object.keys(ProgressBarSize).forEach((size) => {
    it(`Size - ${size}`, () => {
      const page = visit({
        dataTestId,
        storyId: 'progress-indicators-progress-bar--progress-ba',
        args: { size }
      });

      page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
    });
  });
});
