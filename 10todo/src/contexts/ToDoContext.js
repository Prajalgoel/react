import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todoMsg: "todo",
            completed : false,
        }
        
    ],
    addToDo : (todo) => {},
    updateTodo : (todo, id) => {},
    deleteToDo : (id) => {},
    toggleComplete : (id) => {}
})

export const ToDoProvider = ToDoContext.Provider

export default function useTodo() {
    return useContext(ToDoContext)
}