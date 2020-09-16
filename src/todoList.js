import React from 'react'
import Todo from './todo'

export default function todoList({todos, toggleTodo}) {
    return (      
        todos.map(todo => {
            return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        })            
       
    )
}
