import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import { TodoContext, TodoProvider, useTodoContext } from "./Contexts/TodoContext";
import TodoItem from "./Components/TodoItems";
import { useEffect } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const addtodo = (title) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...title }]);
  };
  const updateTodo = (id, title) => {
    setTodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id ? { ...prevtodo, ...title } : prevtodo
      )
    ); // This is an if and else condition for the update to find the id and update the title
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id)); // This is a filter function to delete the todo
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    ); // This is an if and else condition to toggle the complete
  };
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if (localTodos && localTodos.length > 0) {
      setTodos(localTodos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvider
      value={{ todos, addtodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            {/*Manage Your Todos*/}
            <TodoForm/>
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
            <todoform/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}
export default App;
