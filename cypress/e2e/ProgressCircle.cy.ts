import { buildSnapshotName, visit } from '@/cypress/support/utils';
import { ForegroundCircleColor } from '@carlsberggroup/malty.atoms.progress-circle';

const dataTestId = 'progress-circle';

describe('<ProgressCircle />', () => {
  it('Base', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-circle--base'
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - 100%', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-circle--base',
      args: { percentage: '100' }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it.each(Object.keys(ForegroundCircleColor))('Base - Color - %s', (foregroundColor) => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-circle--base',
      args: { foregroundColor }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - Without percentage', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-circle--base',
      args: { displayPercentage: 'false' }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
