import React, { useState } from 'react'
import { useToDo } from '../contexts/ToDoContext';

function TodoItem({ todo }) {

    const {updatetodo, deletetodo, toggleComplete} = useToDo()

    const [todomsg, settodomsg] = useState(todo.todomsg)
    const [isTodoEditable, setisTodoEditable] = useState(false)
    
    const toggleCompleteBtnClicked = () => {
        toggleComplete(todo.id)
    }

    const editmsg = () => {
        if (!isTodoEditable) {
           setisTodoEditable(true) 
        }else{
            setisTodoEditable(false)
            updatetodo(todo.id, {...todo, todomsg : todomsg})
        }
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked = {todo.completed}
                onChange={toggleCompleteBtnClicked}
                
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                readOnly = {!isTodoEditable}
                value={todomsg}
                onChange={(e) => settodomsg(e.target.value) }
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={editmsg}
                disabled = {todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deletetodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
