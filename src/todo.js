import React from 'react'

export default function todo({todo}) {
    function handlerOnchange(){
        return
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
