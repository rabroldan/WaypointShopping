// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Login Page', () => {
  it('successfully authenticates a valid user and logs out', () => {
    cy.visit('/login')

    cy.get('input[name="userName"]').type('ronald123')
    cy.get('input[name="password"]').type('12345')

    cy.get('form').submit()

    cy.url().should('include', '/login')
  })
  it('DOES NOT authenticates a valid user and logs out', () => {
    cy.visit('/login')

    cy.get('input[name="userName"]').type('ronald123').type('!!!')
    cy.get('input[name="password"]').type('12345').type('!!!')

    cy.get('form').submit()

    cy.url().should('include', '/login')
  })
})
