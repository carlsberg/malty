import { buildSnapshotName, visit } from 'cypress/support/utils';

const dataTestId = 'headline';

// TODO: this should come from malty
export enum HeadlineAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}

export enum HeadlineColor {
  ThemePrimary = 'theme-primary',
  DigitalBlack = 'digital-black',
  White = 'white'
}

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
