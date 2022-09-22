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

import "@cypress-audit/lighthouse/commands";
require('cypress-xpath');

Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://partners.shopify.com/organizations')
  cy.xpath('//input[@type="email"]')
    .should("be.visible")
    .type(username);
  cy.xpath('//button[@type="submit"]').should("be.visible").click();
  cy.xpath('//input[@id="account_password"]')
    .should("be.visible")
    .type(password);
  cy.xpath('//button[@type="submit"]').should("be.visible").click();
})