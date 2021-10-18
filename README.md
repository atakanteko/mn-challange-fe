# Modanisa Challenge Frontend


I used ReactJS for this part of the app.


## Structure of Frontend Application
### Project Structure


    ├── index.js
    ├── app.js
    ├── Dockerfile
    ├── Procfile
    ├── k8s
	    └──client-cluster-ip-service.yml
	    └──client-deployment.yml
	    └──ingress-service.yml
	    └──server-cluster-ip-service.yml
	    └──server-deployment.yml
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
 
        
     


## Testing React Apps
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

### src/services Folder

It contains the HTTP request codes required to communicate with the server side. 

### src/components Folder
##### List.js
This file renders a todo as a single list item.
##### ToDoForm.js
It contains the form element used to retrieve a to-do element from the user.

### src/index.js
Root file that render whole react application.



## Docker and Kubernetes
One of the tasks I had to do for this challenge was to use docker and kubernetes. I didn't know anything about these topics prior to this challenge. But by googling I managed to do this on local computer.

In order to validate that my containerized application works well on Kubernetes, I'll use Docker Desktop’s built in Kubernetes environment right on our development machine to deploy my application.

All containers in Kubernetes are scheduled as _pods_, which are groups of co-located containers that share some resources. Furthermore, in a realistic application we almost never create individual pods; instead, most of our workloads are scheduled as _deployments_, which are scalable groups of pods maintained automatically by Kubernetes. Lastly, all Kubernetes objects can and should be described in manifests called _Kubernetes YAML_ files. These YAML files describe all the components and configurations of your Kubernetes app, and can be used to easily create and destroy your app in any Kubernetes environment. [(Source)](https://docs.docker.com/get-started/kube-deploy/) 

There are 2 Kubernetes YAML in my application.
 - **client-deployment.yml** 
 - **server-deployment.yml**

A  `Deployment`, describing a scalable group of identical pods. In this case, you’ll get just one  `replica`, or copy of your pod, and that pod (which is described under the  `template:`  key) has just one container in it, based off of your  `bulletinboard:1.0`  image from the previous step in this tutorial. [(Source)](https://docs.docker.com/get-started/kube-deploy/) 

Also, notice that while Kubernetes YAML can appear long and complicated at first, it almost always follows the same pattern:

-   The  `apiVersion`, which indicates the Kubernetes API that parses this object
-   The  `kind`  indicating what sort of object this is
-   Some  `metadata`  applying things like names to your objects
-   The  `spec`  specifying all the parameters and configurations of your object. [(Source)](https://docs.docker.com/get-started/kube-deploy/) 

##### ingress-service.yml
ingress-nginx is an Ingress controller for Kubernetes using  [NGINX](https://www.nginx.org/)  as a reverse proxy and load balancer.  [(Source)](https://github.com/kubernetes/ingress-nginx)

Below are the links I used in this part of the application.
 - [Codeching](https://www.youtube.com/watch?v=OVVGwc90guo&t=1220s)
 - [doc.docker](https://docs.docker.com/get-started/kube-deploy/)
 - [DigitalGuide](https://www.ionos.com/digitalguide/server/know-how/setting-up-a-docker-repository/)
 - [Nginx](https://kubernetes.github.io/ingress-nginx/deploy/#installation-guide)



