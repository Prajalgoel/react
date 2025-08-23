import React, { useState } from 'react'
import { useToDo } from '../contexts/ToDoContext'

function TodoForm() {

    const { todos, addtodo } = useToDo()

    const [inputToDoMsg, setinputToDoMsg] = useState("")

    const add = (e) => {
        e.preventDefault()
        if (!inputToDoMsg) return

        addtodo({ todomsg: inputToDoMsg, completed: false })
        setinputToDoMsg("")
    }
    return (
        <form
            onSubmit={add}
            className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={inputToDoMsg}
                onChange={(e) => setinputToDoMsg(e.target.value)}

            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

