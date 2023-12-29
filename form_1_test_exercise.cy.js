beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_1.html')
})


describe('This is first test suite', () => {
    it('User can submit data only when valid mandatory values are added', () => {
        // cy.get('#username2').type('Something')
        // cy.get('[data-testid="phoneNumberTestId"]').type('10203040')
        // cy.get('input[name="password"]').type('MyPass123')
        // cy.get('[name="confirm"]').type('MyPass123')

        //in order to activate submit button, user has to click somewhere outside the input field
        cy.get('h2').contains('Password').click()

        cy.get('.submit_button').should('be.enabled');
        cy.get('.submit_button').click()
        cy.get('.submit_button').click()
        cy.get('.submit_button').click()

        // Assert that both input and password error messages are not shown
        // next 2 lines check exactly the same, but using different approach
        cy.get('#input_error_message').should('not.be.visible')
        cy.get('#password_error_message').should('have.css', 'display', 'none')

        // Assert that success message is visible
        // next 2 lines check exactly the same, but using different approach
        cy.get('#success_message').should('be.visible')
        cy.get('#success_message').should('have.css', 'display', 'block')
    });
})
