import React, { useEffect } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { useState } from 'react'
function TodoList() {
    let [todos, setTodos] = useState([])
    const addTodo = (todo) => {
        fetch('./api/add',
        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              },
              body: JSON.stringify(todo)
            }
        )
        .then(response => response.json())
        .then(item => setTodos(item))
    }
    const removeTodo = (id) => {
        fetch('./api/remove',
        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              },
              body: JSON.stringify(id)
            }
        )
        .then(response => response.json())
        .then(item => setTodos(item))
    }
    const updateTodo = (id, value) => {
        fetch('./api/update',
        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              },
              body: JSON.stringify(id, value)
            }
        )
        .then(response => response.json())
        .then(item => setTodos(item))
    }
    useEffect (() => {
        fetch('./api/save',
        {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
              },
            }
        )
        .then(response => response.json())
        .then(item => setTodos(item))
    }, [])

    return (
        <div>
            <TodoForm onSubmit={addTodo}/>
            {todos.map(todo => <Todo todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>)}
        </div>
    )
}

export default TodoList
