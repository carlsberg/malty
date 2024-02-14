type VisitUrlArgs = {
  dataTestId: string;
  storyId: string;
  args?: Record<string, string>;
  variant?: string;
};

type BackgroundVisibleArgs = {
  dataTestId: string;
  url: string;
};

export const buildSnapshotName = (): string =>
  Cypress.currentTest.titlePath
    .join('-')
    .toLowerCase()
    .replace(/<|>|\/|\s/g, '');

const buildUrl = ({ dataTestId, storyId, args = {}, variant }: VisitUrlArgs): string => {
  const finalArgs = Object.entries(args).reduce((combinedArgs, [key, value]) => {
    return `${combinedArgs};${key}:${value}`;
  }, '');

  return `/iframe.html?args=dataTestId:${dataTestId}${finalArgs}&viewMode=story&id=${storyId}`.concat(
    variant ? `&variant=${variant}` : ''
  );
};

export const visit = (args: VisitUrlArgs): Cypress.Chainable<Cypress.AUTWindow> => {
  return cy.visit(buildUrl(args));
};

export const expectImageIsVisible = (dataTestId: string) => {
  cy.getByTestId(dataTestId).should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0);
};

export const expectBackgroundImageIsVisible = ({ dataTestId, url }: BackgroundVisibleArgs) => {
  cy.intercept(url, (request) => {
    request.on('before:response', (response) => {
      response.headers['cache-control'] = 'no-store';
    });
  }).as('backgroundImage');

  cy.getByTestId(dataTestId)
    .should('have.css', 'background-image')
    .and('include', url)
    .then(() => {
      cy.wait('@backgroundImage').its('response.statusCode').should('eq', 200);
    });
};
