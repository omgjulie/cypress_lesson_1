/// <reference types="cypress" />

let user;

describe('User should be able', () => {
    before(() => {
        cy.task("freshUser").then((freshUser) => {
            user = freshUser;
        });
        cy.visit('https://react-redux.realworld.io/#/register?_k=2rf32p');
    });

    it('to register an account with faker', () => {
        cy.get('[placeholder="Username"]').type(user.username).should('have.value', user.username);
        cy.get('[placeholder="Email"]').type(user.email).should('have.value', user.email);
        cy.get('[placeholder="Password"]').type(user.password).should('have.value', user.password);
        cy.get('.btn').contains('Sign in').click();
        cy.get('.navbar').contains(user.username).should('exist');
    })
  })