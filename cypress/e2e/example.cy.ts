describe('Example e2e tests', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Displays a title', () => {
        cy.get('.text__title').contains('ng-template')
    })

})
