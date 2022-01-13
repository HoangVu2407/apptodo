import React from 'react'
import { useState } from 'react'

function TodoForm(props) {
    let [input, setInput] = useState('')
    const handleClick = () => {
        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text: input
        })
        setInput('')
    }
    const handleChange = (event) => {
        setInput(event.target.value)
    }
    return (
        <div>
            <input type='text' value={input} onChange={handleChange}/>
            <button onClick={handleClick}> Add Todo </button>
        </div>
    )
}

export default TodoForm
