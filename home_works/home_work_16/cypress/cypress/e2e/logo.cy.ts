describe('Amazon Logo Verification', () => {
    it('should verify the Amazon logo is present and clickable', () => {
        cy.visit('https://www.amazon.com');

        const logoSelector = 'div#nav-logo > a#nav-logo-sprites';
        cy.get(logoSelector).should('be.visible');


        cy.get(logoSelector).click();
        cy.url().should('eq', 'https://www.amazon.com/ref=nav_logo');
    });
});
