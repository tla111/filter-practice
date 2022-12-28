import React, { useState } from 'react';
import './TodoApp.css';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    function handleNewTodoChange(event) {
        setNewTodo(event.target.value);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        if (newTodo.trim().length === 0) return;

        setTodos([
            ...todos,
            {
                text: newTodo,
                isCompleted: false
            }
        ]);
        setNewTodo('');
    }

    function handleTodoClick(index) {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    }

    function handleDeleteClick(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    function handleEditClick(index) {
        const newTodos = [...todos];
        const todo = newTodos[index];
        todo.text = prompt('Edit todo:', todo.text);
        setTodos(newTodos);
    }

    return (
        <div className="todo-app">
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={handleNewTodoChange}
                    placeholder="Enter new todo"
                />
                <button type="submit">Add Todo</button>
            </form>
            {todos.map((todo, index) => (
                <div className="todo" key={index}>
                    <span className={todo.isCompleted ? 'todo-text todo-completed' : 'todo-text'} onClick={() => handleTodoClick(index)}>
                        {todo.text}
                    </span>
                    <div>
                        <button onClick={() => handleEditClick(index)}>Edit</button>
                        <button onClick={() => handleDeleteClick(index)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoApp;