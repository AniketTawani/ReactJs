import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Sample todo!",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  toggleComplete: (id) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
});

export const useTodo = () => {
  useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
