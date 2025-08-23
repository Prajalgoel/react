import { useEffect, useState } from 'react'
import { ToDoProvider } from './contexts/ToDoContext'
import TodoForm from './components/ToDoForm'
import TodoItem from './components/ToDoItem'

function App() {

  const [todos, setTodos] = useState([])
  const [showfinishedChecked, setshowfinishedChecked] = useState(false)

  const addToDo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (todo, id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }


  // for deleting a value filter is used
  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevToDo) => prevToDo.id === id ? { ...prevToDo, completed: !prevToDo.completed } : prevToDo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    // setItem saves items in strings only therefore stringify used
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <ToDoProvider value={{ todos, addToDo, updateTodo, deleteToDo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className=' flex flex-col gap-2 mb-2'>
            <div className='px-2 flex gap-2'>

              <input type="checkbox" name="showfinished"
                onChange={() => setshowfinishedChecked((prev) => !prev)}
                checked={showfinishedChecked}
                id="" />
              <label htmlFor="">Show finished</label>
            </div>
            <span>Total ToDos : {todos.length}</span>
            <span>Finished Todos : {todos.filter((todo) => todo.completed).length}/{todos.length}</span>
          </div>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {showfinishedChecked ? todos.map((todo, index) => (
              <TodoItem key={todo.id} todo={todo} Sno={index + 1} />
            ))
              :
              // todos.map((todo) => (
              // todo.completed === false ? <TodoItem key={todo.id} todo={todo} /> : ""))

              todos.filter((todo) => todo.completed === false)
                .map((todo, index) => (
                  <TodoItem key={todo.id} todo={todo} Sno={index + 1} />
                ))

              // todos.map((todo) => (
              //   !todo.completed && <TodoItem key={todo.id}  todo={todo} />
              // ))
            }
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
