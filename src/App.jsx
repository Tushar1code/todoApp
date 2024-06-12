import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleOnAdd = () => {
    if (todo.trim()) {
      setTodos([...todos, { text: todo, completed: false }]);
      setTodo("");
    }
  };

  const handleOnRemove = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleOnEdit = (index) => {
    const newTodo = prompt("Edit your todo:", todos[index].text);
    if (newTodo) {
      const updatedTodos = todos.map((todo, i) =>
        i === index ? { ...todo, text: newTodo } : todo
      );
      setTodos(updatedTodos);
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const toggleCompletion = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-gray-800 text-white min-h-[80vh] w-1/2">
      <h1 className='font-bold text-center text-3xl'>iTask - Manage your todos at one place</h1>
        <div className="add-todo my-5 flex items-center">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            placeholder="Add a new todo"
            className='w-3/4 p-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500'
          />
          <button
            onClick={handleOnAdd}
            className="bg-blue-600 hover:bg-blue-700 p-2 text-white rounded-lg ml-4"
          >
            Save
          </button>
      
        </div>
        <h1 className='text-xl font-bold my-5'>Your Todos</h1>
        <div className="todos space-y-4">
          {todos.map((todo, index) => (
            <div key={index} className={`todo flex items-center p-4 rounded-lg shadow-md ${todo.completed ? 'bg-gray-600' : 'bg-gray-700'}`}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompletion(index)}
                className="mr-4"
              />
              <div className={`text w-3/4 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                {todo.text}
              </div>
              <button
                onClick={() => handleOnRemove(index)}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg mx-1"
              >
                Remove
              </button>
              <button
                onClick={() => handleOnEdit(index)}
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg mx-1"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
