import React from 'react'
import useTodo from '../contexts/ToDoContext';
import { useState } from 'react';

function TodoItem({ todo, Sno }) {
    const [isTodoEditable, setisTodoEditable] = useState(false)

    const [todoMsg, settodoMsg] = useState(todo.todoMsg)

    const {updateTodo, deleteToDo, toggleComplete} = useTodo()

    //  1st method
    // const editTodo = () => {
    //     updateTodo({...todo, todoMsg : todoMsg}, todo.id )
    //     setisTodoEditable(false)
    // } 

    // 2nd method
    const editmsg = () => {
        if (!isTodoEditable) {
           setisTodoEditable(true) 
        }else{
            setisTodoEditable(false)
            updateTodo(todo.id, {...todo, todomsg : todoMsg})
        }
    }

    const toggleCompleteBtnClicked = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex items-center border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            } w-full`}
        >
            <span>{Sno}</span>
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleteBtnClicked}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => settodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer"
                // onClick={() => {
                //     if (todo.completed) return;

                //     if (isTodoEditable) {
                //         editTodo();
                //     } else setisTodoEditable((prev) => !prev);
                // }}
                onClick={editmsg}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer"
                onClick={() => deleteToDo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
