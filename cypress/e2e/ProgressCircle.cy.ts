import { buildSnapshotName, visit } from '@/cypress/support/utils';
import { ForegroundCircleColor } from '@carlsberggroup/malty.atoms.progress-circle';

const dataTestId = 'progress-circle';

describe('<ProgressCircle />', () => {
  it('Base', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-circle--base',
      args: { percentage: '27' }
    });

    cy.getByTestId('text').should('be.visible').contains('27%');
    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - 100%', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-circle--base',
      args: { percentage: '100' }
    });

    cy.getByTestId('text').should('be.visible').contains('100%');
    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it.each(Object.keys(ForegroundCircleColor))('Base - Color - %s', (foregroundColor) => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-circle--base',
      args: { foregroundColor, percentage: '27' }
    });

    cy.getByTestId('text')
      .should('be.visible')
      .contains('27%')
      .wait(200)
      .then(() => {
        page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
      });
  });

  it('Base - Without percentage', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-circle--base',
      args: { displayPercentage: 'false' }
    });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
