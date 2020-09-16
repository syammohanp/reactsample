import React from 'react'

export default function todo({todo, toggleTodo}) {
    function handlerOnchange(){
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
            <input type="checkbox" checked={todo.completed} onChange={handlerOnchange} />
            {todo.name}
            </label>
        </div>
    )
}
