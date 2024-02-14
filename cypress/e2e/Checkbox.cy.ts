import { buildSnapshotName, visit } from 'cypress/support/utils';

const dataTestId = 'checkbox';
const wrapperDataTestId = `${dataTestId}-wrapper`;

describe('<Checkbox />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'forms-checkbox--base' });

    page.getByTestId(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Checked', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-checkbox--checked'
    });

    page.getByTestId(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Not Checked', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-checkbox--unchecked'
    });

    page.getByTestId(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Required', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-checkbox--required'
    });

    page.getByTestId(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-checkbox--disabled'
    });

    page.getByTestId(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Disabled - Not checked', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-checkbox--disabled',
      args: { checked: '!false' }
    });

    page.getByTestId(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Readonly', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-checkbox--read-only'
    });

    page.getByTestId(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Readonly - Not checked', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-checkbox--read-only',
      args: { checked: '!false' }
    });

    page.getByTestId(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Indeterminate', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-checkbox--undetermined'
    });

    page.getByTestId(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });

  it('With Error Message', () => {
    const page = visit({
      dataTestId,
      storyId: 'forms-checkbox--errored'
    });

    page.getByTestId(wrapperDataTestId).compareSnapshot(buildSnapshotName());
  });
});
