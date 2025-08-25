import React, { useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removetodo, updatetodo, seteditTodoId, toggleComplete } from '../features/todo/TodoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const editTodoId = useSelector(state => state.editTodoId)
    const showTodoStatus = useSelector(state => state.showTodoStatus)
    
    const dispatch = useDispatch()

    const filteredTodos = useMemo(() => {
        return todos.filter((todo) => {
        if (showTodoStatus === "all") {
            return true
        }else if(showTodoStatus === "finished") {
            return todo.completed
        }else{
            return !todo.completed
        }
        return true
    })
    }, [todos, showTodoStatus])

    return (
        <div>
            <div className="text-3xl font-bold text-center text-gray-100 mb-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg mt-4">
                📝 My Todos
            </div>
            <ul className="list-none">
                {filteredTodos.map((todo, index) => (
                    <li
                        className={`mt-4 flex justify-between items-center px-4 py-2 rounded ${todo.completed ? "bg-white text-black" : "bg-black text-white"}`}
                        key={todo.id}
                    >
                        {/* <div className='text-white'>{todo.text}</div> */}
                        <span>{index+1}</span>
                        <input 
                        className='mx-2'
                        checked = {todo.completed}
                        onChange={() => dispatch(toggleComplete({id : todo.id}))}
                        type="checkbox" name="" id="" />

                        <input
                            className={`w-full outline-none ${todo.completed ? "line-through" : ""}`}
                            value={todo.text}
                            type="text"
                            readOnly
                        />

                        <div className='flex gap-2'>

                            {/* Edit BTn */}
                            <button
                                className={`text-white bg-blue-500 p-2 rounded-md ${editTodoId === todo.id ? "opacity-50" : "opacity-100 cursor-pointer"} `}
                                onClick={(e) => {
                                    dispatch(seteditTodoId({ id: todo.id }))
                                }}
                                disabled={todo.id === editTodoId}
                            >
                                Edit
                            </button>

                            {/* delete Btn */}
                            <button
                                onClick={() => dispatch(removetodo({ id: todo.id }))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos