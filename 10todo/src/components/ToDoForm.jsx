import { useContext, useState } from "react";
import React from 'react'
import useTodo from "../contexts/ToDoContext";

function TodoForm() {
    const [todoMsg, settodoMsg] = useState("")

    const {addToDo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todoMsg) return
        addToDo({todoMsg, completed : false})
        settodoMsg("")
    }

    return (
        <form onSubmit = {add}  className="flex">
            <input
                type="text"
                value = {todoMsg}
                onChange = {(e) => settodoMsg(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

