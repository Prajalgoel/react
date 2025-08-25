import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useDispatch, useSelector } from 'react-redux'
import { updatetodo, loadtodos, changeTodoStatus } from './features/todo/TodoSlice'

function App() {
  const todos = useSelector(state => state.todos)
  const showTodoStatus = useSelector(state => state.showTodoStatus)

  const dispatch = useDispatch()

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    dispatch(loadtodos(todos))
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <AddTodo />
      <div className='flex justify-center gap-14 mt-4'>
        <div className='flex gap-1'>
          <input
            checked={showTodoStatus === "all"}
            onChange={(e) => {
              if (e.target.checked) {
                dispatch(changeTodoStatus("all"))
              } else {
                dispatch(changeTodoStatus(""))
              }
            }}
            type="checkbox" name="" id="" />
          <label className='text-white' htmlFor="">Show All</label>
        </div>
        <div className='flex gap-1'>
          <input
            checked={showTodoStatus === "unfinished"}
            onChange={(e) => {
              if (e.target.checked) {
                dispatch(changeTodoStatus("unfinished"))
              } else {
                dispatch(changeTodoStatus(""))
              }
            }}
            type="checkbox" name="" id="" />
          <label className='text-white' htmlFor="">Show Unfinished</label>
        </div>
        <div className='flex gap-1'>
          <input
            checked={showTodoStatus === "finished"}
            onChange={(e) => {
              if (e.target.checked) {
                dispatch(changeTodoStatus("finished"))
              } else {
                dispatch(changeTodoStatus(""))
              }
            }}
            type="checkbox" name="" id="" />
          <label className='text-white' htmlFor="">Show Finished</label>
        </div>

      </div>
      <Todos />
    </>

  )
}

export default App
