import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/Todo/TodoSlice';
// import the reducer from the slice file
export const store = configureStore({
    reducer: todoReducer
});