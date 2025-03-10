describe("Testowy formularz", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })

    it('Nie wysyła formularza gdy wszystkie pola są puste', () =>{
        cy.get('button').click()

        cy.contains('Dziękujemy za przesłanie formularza!').should('not.exist');
    })

    it('Nie wysyła formularza gdy email i age są puste', () =>{
        cy.get('#name').type("Piotrek");
        
        cy.get('button').click()

        cy.contains('Dziękujemy za przesłanie formularza!').should('not.exist');
    })

    it('Nie wysyła formularza gdy pole age jest puste', () =>{
        cy.get('#name').type("Piotrek");
        cy.get('#email').type("piotrek@gmail.com");
        
        cy.get('button').click()

        cy.contains('Dziękujemy za przesłanie formularza!').should('not.exist');
    })

    it('Nie wysyła formularza gdy pole e-mail jest puste', () =>{
        cy.get('#name').type("Piotrek");
        cy.get('#age').type("23");
        
        cy.get('button').click()

        cy.contains('Dziękujemy za przesłanie formularza!').should('not.exist');
    })

    it('Nie wysyła formularza gdy pole name jest puste', () =>{
        cy.get('#email').type("piotrek@gmail.com");
        cy.get('#age').type("23");
        
        cy.get('button').click()

        cy.contains('Dziękujemy za przesłanie formularza!').should('not.exist');
    })
})