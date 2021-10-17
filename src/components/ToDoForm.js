import React, { useState } from 'react'
import todoService from '../services/todos'

const ToDoForm = ({setTodos,todos,toDoObject}) => {
    const [newTodo, setNewTodo] = useState('a new todo...')

    const addToDo = (event) => {
        event.preventDefault()
        toDoObject = {
          content: newTodo
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

    return(
        <div className="formDiv">
            <form onSubmit={addToDo} >
                <div className="add-items d-flex">                     
                        <input type="text" 
                               className="form-control todo-list-input" 
                               onChange={handleTodoChange}
                               value={newTodo} /> 
                        <button className="add btn btn-primary font-weight-bold todo-list-add-btn save">Add</button>
                </div>
        </form>
        </div>
        
    )
}

export default ToDoForm
