import { createSlice, nanoid } from "@reduxjs/toolkit"
import { act } from "react"

const initialState = {
    todos : [
        {
            id : nanoid(),
            text : "hello",
            completed : false
        }
    ],

    editTodoId : "",
    showTodoStatus : "all"
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addtodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload.text,
                completed : false
            }
            state.todos.push(todo)
        },

        loadtodos : (state, action) => {
            state.todos = action.payload
        },

        removetodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        }, 

        updatetodo : (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id)
            todo.text = action.payload.text
        },

        seteditTodoId : (state, action) => {
            state.editTodoId = action.payload.id
        },

        toggleComplete : (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id)
            todo.completed = !todo.completed
        },

        changeTodoStatus : (state, action) => {
            if (!action.payload) {
                state.showTodoStatus = "all"
            }else{
                state.showTodoStatus = action.payload
            }
        }
    }
})

export const {addtodo,loadtodos,removetodo, updatetodo, seteditTodoId, toggleComplete, changeTodoStatus} = todoSlice.actions

export const todoReducer = todoSlice.reducer