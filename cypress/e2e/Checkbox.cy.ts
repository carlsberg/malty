import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'checkbox';
const wrapperDataTestId = `${dataTestId}-wrapper`;

describe('<Checkbox />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'forms-checkbox--base' });

    page.getFullPageWithVisibleTarget(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Checked', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'forms-checkbox--checked'
    });

    page.getFullPageWithVisibleTarget(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Not Checked', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'forms-checkbox--unchecked'
    });

    page.getFullPageWithVisibleTarget(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Required', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'forms-checkbox--required'
    });

    page.getFullPageWithVisibleTarget(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'forms-checkbox--disabled'
    });

    page.getFullPageWithVisibleTarget(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled - Not checked', () => {
    const page = visit({
      storyId: 'forms-checkbox--disabled',
      args: { checked: '!false', dataTestId }
    });

    page.getFullPageWithVisibleTarget(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Readonly', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'forms-checkbox--read-only'
    });

    page.getFullPageWithVisibleTarget(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Readonly - Not checked', () => {
    const page = visit({
      storyId: 'forms-checkbox--read-only',
      args: { checked: '!false', dataTestId }
    });

    page.getFullPageWithVisibleTarget(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Indeterminate', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'forms-checkbox--undetermined'
    });

    page.getFullPageWithVisibleTarget(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('With Error Message', () => {
    const page = visit({
      args: { dataTestId },
      storyId: 'forms-checkbox--errored'
    });

    page.getFullPageWithVisibleTarget(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });
});
