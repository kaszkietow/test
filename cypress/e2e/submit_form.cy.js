describe('Testowy formularz', () =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Wysyła formularz i wyświetla komunikat', () =>{
        cy.get('#name').type("Piotrek");
        cy.get('#email').type("piotrek@gmail.com");
        cy.get('#age').type('23');

        cy.get('button').click();

        cy.contains("Dziękujemy za przesłanie formularza!").should('be.visible');
    })
})