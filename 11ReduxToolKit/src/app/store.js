import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
// every application have single source of truth i.e only one store.
// configureStire is used to configure the store
// here in this application we have only one key:value pair
// but it can be possible that there can be more than one key:value pair exists in your app.
export const store = configureStore({
    // here, you can't change the state of your application by anything,
    // it's only changeable with the help of reducers.
    // and we have to tell the store where is all the reducers to maintain consistency.
    reducer : todoReducer
})