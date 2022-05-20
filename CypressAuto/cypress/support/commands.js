
Cypress.Commands.add('getBySelector', (selector) => {
    return cy.get(selector);
})

Cypress.Commands.add('clickBySelector', (selector) => {
    cy.get(selector).click();
})

Cypress.Commands.add('OpenUrl', (selector) => {
    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler').click()
})


