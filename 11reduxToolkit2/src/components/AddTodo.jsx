import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo, seteditTodoId, updatetodo } from '../features/todo/TodoSlice'

function AddTodo() {
    const [input, setInput] = useState("")
    const editTodoId = useSelector(state => state.editTodoId)
    const todos = useSelector(state => state.todos)

    useEffect(() => {
        if (editTodoId && todos.find((todo) => todo.id === editTodoId)) {
            setInput(todos.find((todo) => todo.id === editTodoId).text)
        }else{
            setInput("")
            dispatch(seteditTodoId({id : ''}))
        }
    }, [editTodoId,todos])

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input) return

        if (!editTodoId) {            //add
            dispatch(addtodo({ text: input }))
            setInput("")
        } else {                        // save
            if (todos.find((todo) => todo.id === editTodoId )) {                
                dispatch(updatetodo({ id: editTodoId, text: input }))
                dispatch(seteditTodoId({ id: "" }))
                setInput("")
            }   else{
                setInput("")
                dispatch(seteditTodoId({id : ""}))
            }                 
        }
    }

    return (
        <div>
            <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
                <input
                    type="text"
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter a Todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer"
                >
                    {editTodoId ? "Save" : "Add Todo"}
                </button>
            </form>
        </div>
    )
}

export default AddTodo