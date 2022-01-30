/// <reference types="cypress" />

describe('User should be able', () => {
    it('to login on the site', () => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=v1hfj9');
        cy.get('[placeholder="Email"]').type('julie-kov@ukr.net').should('have.value', 'julie-kov@ukr.net');
        cy.get('[placeholder="Password"]').type('111111').should('have.value', '111111');
        cy.get('.btn').contains('Sign in').click();
        cy.get('.navbar').contains('JulieKo').should('exist');
    })
  })