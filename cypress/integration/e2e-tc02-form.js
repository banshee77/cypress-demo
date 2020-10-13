describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit('http://localhost:3000')
    
    cy.get("form");

    cy.get('input[name="name"]')
      .type("wipe")
      .should("have.value", "wipe");

    cy.get('input[name="email"]')
      .type("wipe@dev.test")
      .should("have.value", "wipe@dev.test");

    cy.get("textarea")
      .type("Rise and Shine ! This is a testing message in text area :)")
      .should("have.value", "Rise and Shine ! This is a testing message in text area :)");

    cy.get("form").submit();

    cy.get('input[name="name"]')
      .should("have.value", "");

    cy.get('input[name="email"]')
      .should("have.value", "");
    
      cy.get("textarea")
      .should("have.value", "");      
  });
});