import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos : [
        {
            id : nanoid(),
            text : "hello"
        }
    ]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addtodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },

        removetodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        }, 

        // updatetodo : (state, action) => {
        //     state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, text : action.payload.text} : todo )
        // }

        // updatetodo : (state, action) => {
        //     const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id)
        //     if (todoIndex !== -1) {
        //         state.todos[todoIndex].text = action.payload.text
        //     }
        // }

        updatetodo : (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id)
            if (todo) {
                todo.text = action.payload.text
            }
        }
    }
})

export const {addtodo, removetodo, updatetodo} = todoSlice.actions

export const todoReducer = todoSlice.reducer