import { useState } from 'react'    //hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    // counter += 1
    if (counter == 20) {
      return
    }
    setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1) 
    // will setCounter only once

    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)  //prevCounter gives existing state  
  }

  const removeValue = () =>{
    if (counter == 0) {
      return
    }
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Prajal</h1>
      <h2>Counter : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
