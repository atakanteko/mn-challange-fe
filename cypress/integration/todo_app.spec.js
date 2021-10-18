describe('Todo app', function() {

    beforeEach(function() {
        cy.request('GET', 'http://localhost:3001/api/testing/reset')

        cy.visit('http://localhost:3000')
      })


    it('front page can be opened', function() {
      cy.contains('Moda Nisa Assignment - ToDo List')
    })

    it('a new todo from cypress', function() {
        cy.get('input').type('another todo cypress')
        cy.contains('Add').click()
      })
  })