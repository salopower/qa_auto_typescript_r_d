describe('Amazon Product Search', () => {
    it('should perform a basic product search', () => {
        cy.visit('https://www.amazon.com');


        cy.get('input#twotabsearchtextbox').type('phone charger');
        cy.get('#nav-search-submit-button').click();

        const resultSelector = 'a.a-link-normal.s-line-clamp-2.s-link-style.a-text-normal span';
        cy.get(resultSelector).eq(0).should('contain.text', 'Charger');
        cy.get(resultSelector).each(($el) => {
            cy.wrap($el).should('contain.text', 'Charger');
        });
    });
});
