import { createContext, useContext } from "react";
export const TodoContext = createContext({
    todos: [
        { id: 1, title: "Todo msg", completed: false },

    ],
    addtodo: (title) => { },
    updateTodo: (id, title) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
});
export const useTodoContext = () => useContext(TodoContext);
export const TodoProvider = TodoContext.Provider;
