# Modanisa Challenge Frontend


I used ReactJS for this part of the app.


## Structure of Backend Application
### Project Structure


    ├── index.js
    ├── app.js
    ├── Dockerfile
    ├── Procfile
    ├── cypress
        ├── integration
	        └──todo_app.spec.js
	├── src
		├── App.js
		├── index.js
		├── components
	        └──List.js
	        └──ToDoForm.js
	    ├── services
	        └──todos.js
	    ├── tests    
	        └──List.test.js
    
    ├── package-lock.json
    ├── packagejson
 
        
     


## Testing React apps
### Cypress Folder 
There are many different ways of testing React applications.  So far I have tested the backend as a whole on an API level using integration tests, and tested some frontend components using unit tests.

Next in this folder (cypress) I will look into one way to test the [system as a whole](https://en.wikipedia.org/wiki/System_testing) using _End to End_ (E2E) tests. E2E tests are potentially the most useful category of tests, because they test the system through the same interface as real users use.

### Cypress
Cypress is exceptionally easy to use, and when compared to Selenium, for example, it requires a lot less hassle and headache. Its operating principle is radically different than most E2E testing libraries, because Cypress tests are run completely within the browser. Other libraries run the tests in a Node-process, which is connected to the browser through an API.

As with unit and integration tests, with E2E tests it is the best to empty the database and possibly format it before the tests are run. The challenge with E2E tests is that they do not have access to the database.

The solution is to create API endpoints to the backend for the test which I mentioned in backend part. 

During the formatting the test does HTTP requests to the backend with  [cy.request](https://docs.cypress.io/api/commands/request.html).

Unlike earlier, now the testing starts with the backend in the same state every time. The backend will contain nothing and visits root address.

[cy.visit](https://docs.cypress.io/api/commands/visit.html) and [cy.contains](https://docs.cypress.io/api/commands/contains.html) are Cypress commands, and their purpose is quite obvious. [cy.visit](https://docs.cypress.io/api/commands/visit.html) opens the web address given to it as a parameter in the browser used by the test. [cy.contains](https://docs.cypress.io/api/commands/contains.html) searches for the string it received as a parameter from the page.

##### todo_app.spec.js

	describe('Todo app',  function()  {
		beforeEach(function()  {
			cy.request('GET',  'http://localhost:3001/api/testing/reset')
			cy.visit('http://localhost:3000')
		})

		it('front page can be opened',  function()  {
			cy.contains('Moda Nisa Assignment - ToDo List')
		})

		it('a new todo from cypress',  function()  {
			cy.get('input').type('another todo cypress')
			cy.contains('Add').click()
		})
	})
### src/tests Folder 
##### List.test.js
In this file, in addition to Jest, I also need another testing library that will help us render components for testing purposes. The current best option for this is [react-testing-library](https://github.com/testing-library/react-testing-library). 

The test in this file verifies that the component renders the contents of the todo.



