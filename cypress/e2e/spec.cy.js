// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// describe('My First Test', () => {
//   it('finds the content "type"', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type')
//   })
// })

// describe('My First Test', () => {
//   it('clicks the link "type"', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()
//   })
// })

// describe('My First Test', () => {
//   it('clicking "type" navigates to a new url', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')
//   })
// })

// describe('My First Test', () => {
//   it('Gets, types and asserts', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')

//     // Get an input, type into it and verify
//     // that the value has been updated
//     cy.get('.action-email')
//       .type('fake@email.com')
//       .should('have.value', 'fake@email.com')
//   })
// })

// describe('My Lighthouse Test', () => {
//   it("should verify the lighthouse scores with thresholds", function () {
//     cy.lighthouse({
//       performance: 64,
//       accessibility: 68,
//       "best-practices": 92,
//       seo: 100,
//       pwa: 20,
//     });
//   });
// })

describe('User account page', () => {

  beforeEach(() => {
    cy.login("quoc.nguyen@groovetechnology.com", "Hh111111!")
  })

  it('Visits the Home page', () => {
    // cy.url().should('eq', 'https://partners.shopify.com/1834805/stores')
    cy.lighthouse({
      performance: 15,
      accessibility: 83,
      "best-practices": 100,
      seo: 77,
      pwa: 20,
    });
  })

  it('Visits the Product page', () => {
    cy.xpath('//span[text()="Stores"]').should("be.visible").click();
    cy.xpath('//input[@id="PolarisTextField1"]')
      .should("be.visible")
      .clear()
      .type('quoc-test');
    cy.xpath('//ul[contains(@class,"Polaris-ResourceList")]//li').first().should("be.visible").click()
    cy.xpath('//a').contains("Log in").click({ force: true })
  })

  // it('should verify the lighthouse scores with thresholds', () => {
  //   cy.visit('/');
  //   cy.lighthouse({
  //     performance: 15,
  //     accessibility: 98,
  //     "best-practices": 100,
  //     seo: 77,
  //     pwa: 30,
  //   });
  // })
})