import { createSlice, nanoid } from "@reduxjs/toolkit";
// with the help of nanoid function we are able to create unique id every time
//here we are taking iniitialState as a object but it can be array also
const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello Word",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // here state means it have the latest/updated value of all the initialStates
    // action means, passing from the user
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((singleTodo) => singleTodo.id !== action.payload);
    },
  },
});

// we have to export all the individual reducers because we can't
// say that which component uses which reducer.
export const { addTodo, removeTodo } = todoSlice.actions;

// this whole reducers export is for the store.
export default todoSlice.reducer;
