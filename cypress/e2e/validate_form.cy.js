describe("Testowy formularz", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })

    it('Nie wysyła formularza gdy pola są puste', () =>{
        cy.get('button').click()

        cy.contains('Dziękujemy za przesłanie formularza!').should('not.exist');
    }) 
})