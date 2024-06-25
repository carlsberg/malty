import { ForegroundCircleColor } from '@carlsberggbs/malty.atoms.progress-circle';
import { buildSnapshotName, visit } from '../support/utils';

const dataTestId = 'progress-circle';

describe('<ProgressCircle />', () => {
  it('Base', () => {
    const page = visit({
      storyId: 'progress-indicators-progress-circle--base',
      args: { percentage: '27', dataTestId }
    });

    cy.getByTestId('text').should('be.visible').contains('27%');
    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - 100%', () => {
    const page = visit({
      storyId: 'progress-indicators-progress-circle--base',
      args: { percentage: '100', dataTestId }
    });

    cy.getByTestId('text').should('be.visible').contains('100%');
    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  Object.keys(ForegroundCircleColor).forEach((foregroundColor) => {
    it(`Base - Color - ${foregroundColor}`, () => {
      const page = visit({
        storyId: 'progress-indicators-progress-circle--base',
        args: { foregroundColor, percentage: '27', dataTestId }
      });

      cy.getByTestId('text')
        .should('be.visible')
        .contains('27%')
        .wait(200)
        .then(() => {
          page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
        });
    });
  });

  it('Base - Without percentage', () => {
    const page = visit({
      storyId: 'progress-indicators-progress-circle--base',
      args: { displayPercentage: 'false', dataTestId }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
