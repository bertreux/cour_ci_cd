/// <reference types="cypress" />

describe('Test de la page d\'accueil', () => {
    it('Affiche le texte "Hello World!"', () => {
      cy.visit('/');
      cy.contains('Hello World!');
    });
  });