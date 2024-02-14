import { buildSnapshotName, visit } from '@/cypress/support/utils';
import { HeadlineAlign, HeadlineColor } from '@carlsberggroup/malty.atoms.headline';

const dataTestId = 'headline';

describe('<Headline />', () => {
  it('Base', () => {
    const page = visit({
      dataTestId,
      storyId: 'typography-headline--headline'
    });

    page.getByTestId(dataTestId).should('be.visible');
    page.get('#storybook-root').compareSnapshot(buildSnapshotName());
  });

  it.each(Object.keys(HeadlineAlign))('Align - %s', (align) => {
    const page = visit({
      dataTestId,
      storyId: 'typography-headline--headline',
      args: { align }
    });

    page.getByTestId(dataTestId).should('be.visible');
    page.get('#storybook-root').compareSnapshot(buildSnapshotName());
  });

  it.each(Object.keys(HeadlineColor))('Color - %s', (color) => {
    const page = visit({
      dataTestId,
      storyId: 'typography-headline--headline',
      args: { color }
    });

    page.getByTestId(dataTestId).should('be.visible');
    page.get('#storybook-root').compareSnapshot(buildSnapshotName());
  });
});
