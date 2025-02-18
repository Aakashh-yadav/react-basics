import { createSlice, nanoid } from '@reduxjs/toolkit';
// nanoid is use to create unique ID for the todo
// createSlice is used to create a slice of the state

const initialState = {
    todos: [
        {
            id: '1',
            text: "hello",
            completed: false
        }//This is how we can add a todo in the initial state
        //this is the initial state of the Store 
    ]
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            //action and state are the two parameters that we should pass to the reducers
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            todo.text = action.payload.text;
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            todo.completed = !todo.completed
        }
    }
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;