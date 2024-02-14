import { buildSnapshotName, visit } from '@/cypress/support/utils';
import { FloaterColor } from '@carlsberggroup/malty.atoms.floater';

const dataTestId = 'floater';

describe('<Floater />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'forms-floater--base' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - Negative', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-floater--base',
      args: { negative: 'true' }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Text - Icon Right', () => {
    const page = visit({ dataTestId, storyId: 'forms-floater--text' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Text - Icon left', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-floater--text',
      args: { iconPos: 'Left' }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it.each(Object.keys(FloaterColor))('Color - %s', (color) => {
    const page = visit({
      dataTestId,
      storyId: 'forms-floater--base',
      args: { color }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
