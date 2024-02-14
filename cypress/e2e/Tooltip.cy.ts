import { buildSnapshotName, visit } from 'cypress/support/utils';

const dataTestId = 'tooltip';
const dataTestIdTriggerElement = 'tooltip-trigger-element';

describe('<Tooltip />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'information-tooltip--tooltip' });

    page.getByTestId(dataTestIdTriggerElement).should('be.visible');
    page.get('body').compareSnapshot(buildSnapshotName());
  });

  it('Dark mode', () => {
    const page = visit({
      dataTestId,
      storyId: 'information-tooltip--tooltip',
      args: { isOpen: 'true', isDark: 'true' }
    });

    page.getByTestId(dataTestId).should('be.visible');
    page.get('body').compareSnapshot(buildSnapshotName());
  });

  it('Open on top', () => {
    const page = visit({
      dataTestId,
      storyId: 'information-tooltip--tooltip',
      args: { isOpen: 'true' }
    });

    page.getByTestId(dataTestId).should('be.visible');
    page.get('body').compareSnapshot(buildSnapshotName());
  });

  it('Open on bottom', () => {
    const page = visit({
      dataTestId,
      storyId: 'information-tooltip--tooltip',
      args: { isOpen: 'true', placement: 'bottom' }
    });

    page.getByTestId(dataTestId).should('be.visible');
    page.get('body').compareSnapshot(buildSnapshotName());
  });

  it('Open on left', () => {
    const page = visit({
      dataTestId,
      storyId: 'information-tooltip--tooltip',
      args: { isOpen: 'true', placement: 'left' }
    });

    page.getByTestId(dataTestId).should('be.visible');
    page.get('body').compareSnapshot(buildSnapshotName());
  });

  it('Open on right', () => {
    const page = visit({
      dataTestId,
      storyId: 'information-tooltip--tooltip',
      args: { isOpen: 'true', placement: 'right' }
    });

    page.getByTestId(dataTestId).should('be.visible');
    page.get('body').compareSnapshot(buildSnapshotName());
  });
});
