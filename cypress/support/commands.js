// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('POSTrequest', (url, body) => {
    cy.request({
        method: 'POST',
        url: url,
        failOnStatusCode: false,
        body: body,
        headers: {
            'Content-Type': 'application/json'
                }
    }).then((response) => {
        return response
    })
});

Cypress.Commands.add('GETrequest', (url) => {
    cy.request({
        method: 'GET',
        url: url,
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
                }
    }).then((response) => {
        return response
    })
});

Cypress.Commands.add('PUTrequest', (url, body) => {
    cy.request({
        method: 'PUT',
        url: url,
        failOnStatusCode: false,
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response
    })
});