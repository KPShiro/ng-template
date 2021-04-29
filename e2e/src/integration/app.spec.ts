import { getWelcomeMessage } from '../support/app.po';

describe('ng-template', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getWelcomeMessage().contains('Welcome');
  });
});
