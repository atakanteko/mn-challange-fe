import React, { useState,useEffect  } from 'react'
import './index.css'
import List from './components/List';
import todoService from './services/todos'

const  App = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('a new todo...')

  useEffect(() => {
    todoService
      .getAll()
      .then(initialTodos => {
        setTodos(initialTodos)
      })
  }, [])

  const addToDo = (event) => {
    event.preventDefault()
    const toDoObject = {
      content: newTodo,
      id: todos.length + 1,
    }

    todoService
    .create(toDoObject)
    .then(returnedTodo => {
      setTodos(todos.concat(returnedTodo))
      setNewTodo('')
    })
  }
  const handleTodoChange = (event) => {
    setNewTodo(event.target.value)
  }

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
          <div className="row container d-flex justify-content-center">
              <div className="col-md-12">
                  <div className="card px-3">
                      <div className="card-body">
                          <h4 className="card-title">Moda Nisa Assignment - ToDo List</h4>

                          <form onSubmit={addToDo} >
                            <div className="add-items d-flex">                     
                                <input type="text" 
                                      className="form-control todo-list-input" 
                                      onChange={handleTodoChange}
                                      value={newTodo} /> 
                                <button className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button>
                            </div>
                          </form> 

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
