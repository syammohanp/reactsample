import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './todoList';
import uuidv4 from 'uuid/v4';

const LOCAL_STORAGE_KEY = 'todoapp.todos'

function App() {
  const [todos, setTodos] = useState([{id:1, name:'todo 1', completed:false}]);
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === '')
      return
    setTodos(prevTodos => {
      return [...prevTodos, {id:uuidv4(), name: name, completed: false}]
    })
    todoNameRef.current.value = ''
  }
  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Todo</button>
      <div>0 left Todo</div> 
    </>    
  );
}

export default App;
