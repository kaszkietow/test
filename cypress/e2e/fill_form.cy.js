describe("Testowy formularz", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("Wypełnianie formularza", () => {
    cy.get("#name").type("Piotrek");
    cy.get("#email").type("piotrek@gmail.com");
    cy.get("#age").type("23");

    cy.get("#name").should('have.value',"Piotrek");
    cy.get("#email").should('have.value',"piotrek@gmail.com");
    cy.get("#age").should('have.value',"23");
  })


})