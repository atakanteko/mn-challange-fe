import React, { useState,useEffect  } from 'react'
import './index.css'
import List from './components/List';
import todoService from './services/todos'
import ToDoForm from './components/ToDoForm';

const  App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    todoService
      .getAll()
      .then(initialTodos => {
        setTodos(initialTodos)
      })
  }, [])

  

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
          <div className="row container d-flex justify-content-center">
              <div className="col-md-12">
                  <div className="card px-3">
                      <div className="card-body">
                          <h4 className="card-title">Moda Nisa Assignment - ToDo List</h4>

                          <ToDoForm setTodos={setTodos} todos={todos}/>    

                          <div className="list-wrapper">
                            <ul className="d-flex flex-column-reverse todo-list">
                            {todos.map(todo => 
                              <List key={todo.id} todo={todo.content}/>
                              )
                            } 
                            </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
