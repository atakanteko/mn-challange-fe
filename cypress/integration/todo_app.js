describe('Todo app', function() {

  beforeEach(function() {
    cy.request('GET', 'https://mnchallenge.herokuapp.com/api/testing/reset')
    const todo = {
      content:"Hello, this is a new content."
    }
    cy.request('POST','https://mnchallenge.herokuapp.com/api/todos/',todo)
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Moda Nisa Assignment - ToDo List')
  })

  it('a new todo from cypress can be created', function() {
    cy.get('input').type('another todo cypress input')
    cy.contains('Add').click()
    cy.contains('another todo cypress input')
    })

 })