/// <reference types="cypress" />

const { wait } = require("@testing-library/react");

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://alexoid1.github.io/Bookstore-react/')
  })

  it('should have a title', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
  
    cy.get('.header__logo').should('be.visible');
    cy.get('.header__logo').contains('Bookstore AXZ');
  })

  it('should check the list of links', () => {
    cy.get('.header').find('.header__link').should('have.length', 3);
  })

  it('should check books links', () => {
    cy.get('.header').find('.header__link').eq(1).contains('BOOKS').click()
    cy.location()
   cy.wait(2000)
    cy.get('.header').find('.header__link').eq(2).contains('SEARCH BOOKS').click();
    cy.location()
  })

  it('should check the inputs', () => {
    cy.get('.filter').should('be.visible');
    cy.get('.inputTitle').find('[type=text]').should('have.attr', 'placeholder', 'Title');
    cy.get('.inputAuthor').find('[type=text]').should('have.attr', 'placeholder', 'Author Name');
   
  })

  it('should write in the inputs and create a new book', () => {
    cy.get('.inputTitle').find('[type=text]').type('El Camino del Samurai')
    cy.get('.inputAuthor').find('[type=text]').type('Yamomoto Tsunetomo')
    cy.get('.inputCategory').find('select').select('Action')
    cy.get('.inputCategory').find('select').select('Biography')
    cy.get('.inputCategory').find('select').select('History')
    cy.get('.addBook').click()
  })
  
  it('should score with 5 stars', () => {
    cy.get('.update').find('button').eq(0).click()
    cy.wait(2000)
    cy.get('.inputScore').type('5')
    cy.get('input[type="range"]').invoke('val', 90).trigger('change')
    cy.wait(2000)
    cy.get('button').contains('SAVE PROGRESS').click()
  })

  it('should delete the book', ()=> {
    cy.wait(3000)
    cy.get('.book-container').eq(0).get('button').contains('Remove').click()
  })
 

 
})
