import React, { useState } from "react";
import "./App.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const addTodo = () => {
    const newTodo = { taskName, description, status: "notCompleted" };
    setTodos([...todos, newTodo]);
    clearForm();
  };

  const clearForm = () => {
    setTaskName("");
    setDescription("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const changeStatus = (index, newStatus) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status = newStatus;
    setTodos(updatedTodos);
  };

  const filterTodos = () => {
    if (statusFilter === "all") {
      return todos;
    } else {
      return todos.filter((todo) => todo.status === statusFilter);
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <form className="todo-form">
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
        <br />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <button type="button" onClick={addTodo}>
          Add Todo
        </button>
      </form>

      <label htmlFor="statusFilter">Filter by Status:</label>
      <select
        id="statusFilter"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="notCompleted">Not Completed</option>
      </select>

      <div className="todos-list">
        {filterTodos().map((todo, index) => (
          <div key={index} className="todo-card">
            <h3>{todo.taskName}</h3>
            <p>{todo.description}</p>
            <p>Status: {todo.status}</p>
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <select onChange={(e) => changeStatus(index, e.target.value)}>
              <option value="completed">Completed</option>
              <option value="notCompleted">Not Completed</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
