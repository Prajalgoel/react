import { useState } from 'react'
import { ToDoContextProvider } from './contexts/ToDoContext'

const [todos, settodos] = useState([])



function App() {
  

  return (
    <ToDoContextProvider value={{todos, addtodo, updatetodo, deletetodo, toggleComplete}}>
      

    </ToDoContextProvider>
  )
}

export default App
