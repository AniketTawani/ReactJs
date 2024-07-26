import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((singleTodo) => (singleTodo.id === id ? todo : singleTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((singleTodo) => singleTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((singleTodo) =>
        singleTodo.id === id
          ? { ...singleTodo, completed: !singleTodo.completed }
          : singleTodo
      )
    );
  };

  //local storage starts!

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const todos = localStorage.getItem("todos");

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  return (
    <TodoProvider
      value={{ addTodo, deleteTodo, toggleComplete, updateTodo, todos }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map(singleTodo=>(
              <div key={singleTodo.id} className="w-full">
                <TodoItem todo={singleTodo}></TodoItem>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
