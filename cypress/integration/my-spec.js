describe('My first Test', function () {
  it ('Does not too much', function () {
  //   expect(true).to.equal(true)
  // })
    cy.visit('http://example.cypress.io')
    
    cy.contains('type').click()
  
    cy.url()
      .should('include','/commands/actions')

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value','fake@email.com')

  })
})