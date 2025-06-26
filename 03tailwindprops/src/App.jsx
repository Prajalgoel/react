import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "prajal",
    age : 19
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-700 p-3 rounded-xl mb-4'>Prajal</h1>

      <Card username="chai" someObj = {myObj} someArr = {newArr} btnText="click me" />
      <Card  username="prajal" btnText="visit me"/>
      <Card username="prajal" />


    </>
  )
}

export default App
