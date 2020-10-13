describe('My React Test', function () {
  it ('Does not too much', function () {

    cy.visit('http://localhost:3000')
    
    cy.get('a[href="https://reactjs.org"]').should('have.attr', 'target', '_blank')
  })
})