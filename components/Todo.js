import React from 'react'
import TodoList from './TodoList'
import { useState } from 'react'
function Todo({ todo, removeTodo, updateTodo }) {
    let [edit, setEdit] = useState({
        id: null,
        text: null
    })
    const handleChange = (event) => {
        setEdit({
            id: edit.id,
            text: event.target.value
        })
    }
    const handleClick = () => {
        updateTodo(edit)
        setEdit({
            id: null,
            text: null
        })
    }
    if (edit.id) {
        return (
            <div>
                <input type='text' value={edit.text} onChange={handleChange} />
                <button onClick={handleClick}> Update </button>
            </div>

        )
    }
    return (
        <>
            <div key={todo.id}>
                {todo.text}
            </div>
            <button onClick={() => removeTodo(todo.id)}> Delete </button>
            <button onClick={() => setEdit({ id: todo.id, text: todo.text })}> Update</button>
        </>
    )
}

export default Todo
