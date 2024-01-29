/// <reference types="Cypress" />

describe('navigation', () => {
    it('should navigate between pages', () => {
        cy.visit(Cypress.env('REACT_APP_URL'));
        cy.location('pathname').should('eq', '/');

        cy.get('[data-cy="header-btn-experiences"]').click();
        cy.location('pathname').should('eq', '/experiences');

        cy.get('[data-cy="header-btn-logo"]').click();
        cy.location('pathname').should('eq', '/');

        cy.get('[data-cy="header-btn-skills"]').click();
        cy.location('pathname').should('eq', '/skills');

        cy.get('[data-cy="header-btn-home"]').click();
        cy.location('pathname').should('eq', '/');

        cy.get('[data-cy="header-btn-contact"]').click();
        cy.location('pathname').should('eq', '/contact');
    });

    it('should display corresponding buttons based on screen sizes', () => {
        cy.visit(Cypress.env('REACT_APP_URL'));

        // on desktop
        cy.get('[data-cy="header-nav-list-desktop"]')
            .children()
            .should('have.length', 4);
        cy.get('[data-cy="header-btn-open-overlay"]').should('not.exist');

        // on mobile devices
        cy.viewport(360, 740);
        cy.get('[data-cy="header-nav-list-desktop"]').should('not.exist');
        cy.get('[data-cy="header-btn-open-overlay"]').should('exist');
    });

    it('should open and close overlay menu on mobile devices', () => {
        cy.visit(Cypress.env('REACT_APP_URL'));
        cy.viewport(360, 740); // mobile device Galaxy S8+
        cy.location('pathname').should('eq', '/');

        // menu should disappear after navigation event happens
        cy.get('[data-cy="header-btn-open-overlay"]').as('open-menu-btn');
        cy.get('@open-menu-btn').click();
        cy.get('[data-cy="header-nav-overlay"]').as('menu-overlay');
        cy.get('@menu-overlay').should('exist');
        cy.get('[data-cy="header-btn-experiences"]').click();
        cy.location('pathname').should('eq', '/experiences');
        cy.get('@menu-overlay').should('not.exist');

        // menu should appear/disappear upon menu button click
        cy.get('@open-menu-btn').click();
        cy.get('@menu-overlay').should('exist');
        cy.get('@open-menu-btn').click();
        cy.get('@menu-overlay').should('not.exist');
        cy.location('pathname').should('eq', '/experiences');

        // menu should disappear upon clicking outside of nav-overlay
        cy.get('@open-menu-btn').click();
        cy.get('@menu-overlay').should('exist');
        cy.get('.experiences').contains('My formal resume').click();
        cy.get('@menu-overlay').should('not.exist');
        cy.location('pathname').should('eq', '/experiences');
    });
});
