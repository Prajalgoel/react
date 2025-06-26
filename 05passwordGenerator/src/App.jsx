import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charartorAllowed, setCharartorAllowed] = useState(false)
  const [password, setPassword] = useState("")


  // useref => used to take reference
  const passwordRef = useRef(null)

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()    //? becoause if current value zero it will not copy 
    passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  }, [password])

  // usecallback hook
  // used for optimisation
  // changes/recreates function only if dependencies are changed
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charartorAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/`~\""

    for (let i = 1; i <= length; i++) {
      let randomIndexInStr = Math.floor(Math.random() * str.length)
      pass += str[randomIndexInStr]

    }

    setPassword(pass)
  }, [length, numberAllowed, charartorAllowed, setPassword])  //setPassword only for optimisation not compulsory
  

  // useeffect 
  // jb b page render hoga ya length, numberAllowed, charartorAllowed me change hoga ye passwordGenerator ko run krdega
  
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charartorAllowed, passwordGenerator])   


  return (
    <>
      <div className='bg-gray-800  max-w-md w-full p-5 mt-8 rounded-lg flex flex-col  mx-4  shadow-lg'>

        <h1 className='text-2xl text-white text-center'>Password Generator</h1>

        <div className='w-full mt-3 flex gap-2 justify-center items-center'>
          <input 
          type="text" 
          className='outline-none rounded-md w-full p-2 text-lg' 
          readOnly 
          value={password} 
          placeholder='Password' 
          ref={passwordRef}
          />

          <button 
          onClick={copyPassword}
          className='bg-blue-700 p-3 rounded-md font-bold text-white text-lg outline-none'>Copy</button>
        </div>

        <div className='buttons flex items-center gap-4 mt-3 text-white justify-center flex-wrap'>

          <div className='flex items-center gap-1'>
            <input 
            type="range" 
            name="" 
            id="" 
            min={6} 
            max={100} 
            value={length} 
            onChange={(e) => {setLength(e.target.value) }} />
            <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-1'>
            <input 
            type="checkbox" 
            name="" 
            id="" 
            className='charactor' 
            defaultChecked = {charartorAllowed}
            onChange={() => {
              setCharartorAllowed((prev) => !prev)
            }} /> 
            <label>Charactor</label>
          </div>

          <div className='flex items-center gap-1'>
            <input 
            type="checkbox" 
            name="" 
            id="" 
            className='Number' 
            defaultChecked = {numberAllowed} 
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}/>
            <label>Number</label>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
