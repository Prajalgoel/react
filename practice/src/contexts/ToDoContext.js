import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos : [
        {
            id : 1,
            todomsg : "hahkh",
            completed : false
        }
    ],

    addtodo : (todo) => {},
    updatetodo : (id, todo) => {},
    deletetodo : (id) => {},
    toggleComplete : (id) => {}
})

export const ToDoContextProvider = ToDoContext.Provider

export default useToDo = () => {
    return useContext(ToDoContext)
}


