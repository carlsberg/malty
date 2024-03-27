import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'tooltip';
const dataTestIdTriggerElement = 'tooltip-trigger-element';

describe('<Tooltip />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'information-tooltip--tooltip' });

    page.getFullPageWithVisibleTarget(dataTestIdTriggerElement).compareSnapshot(buildSnapshotName());
  });

  it('Dark mode', () => {
    const page = visit({
      storyId: 'information-tooltip--tooltip',
      args: { dataTestId, isOpen: 'true', isDark: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Open on top', () => {
    const page = visit({
      storyId: 'information-tooltip--tooltip',
      args: { dataTestId, isOpen: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Open on bottom', () => {
    const page = visit({
      storyId: 'information-tooltip--tooltip',
      args: { dataTestId, isOpen: 'true', placement: 'bottom' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Open on left', () => {
    const page = visit({
      storyId: 'information-tooltip--tooltip',
      args: { dataTestId, isOpen: 'true', placement: 'left' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Open on right', () => {
    const page = visit({
      storyId: 'information-tooltip--tooltip',
      args: { dataTestId, isOpen: 'true', placement: 'right' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
