import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id: '1',
            text: "hello"
        }//This is how we can add a todo in the initial state
        //this is the initial state of the todo
    ]
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addtodo: (state, action) => {
            //action and state are the two parameters that we should pass to the reducers
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        }
    }
});