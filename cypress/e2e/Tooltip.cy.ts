import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'tooltip';
const dataTestIdTriggerElement = 'tooltip-trigger-element';

describe('<Tooltip />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'information-tooltip--base' });

    page.getFullPageWithVisibleTarget(dataTestIdTriggerElement).compareSnapshot(buildSnapshotName());
  });

  it('Light mode', () => {
    const page = visit({
      storyId: 'information-tooltip--light',
      args: { dataTestId, isOpen: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Open on top', () => {
    const page = visit({
      storyId: 'information-tooltip--base',
      args: { dataTestId, isOpen: 'true' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Open on bottom', () => {
    const page = visit({
      storyId: 'information-tooltip--base',
      args: { dataTestId, isOpen: 'true', placement: 'bottom' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Open on left', () => {
    const page = visit({
      storyId: 'information-tooltip--base',
      args: { dataTestId, isOpen: 'true', placement: 'left' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Open on right', () => {
    const page = visit({
      storyId: 'information-tooltip--base',
      args: { dataTestId, isOpen: 'true', placement: 'right' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
