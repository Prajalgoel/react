import { useState } from "react"


function App() {
  const [color,setColor] = useState("black")

  function changeColor(){

  }

  return (
    <div className="w-full h-screen transition-all relative flex justify-center"
    style={{backgroundColor : color}}
   >
      <div className="flex gap-8 absolute bottom-3 flex-wrap justify-center bg-white p-3 rounded-full">
        <button className="bg-red-700 p-1 rounded-md font-bold text-white" onClick={() => setColor("red")}>Red</button>
        <button className="bg-blue-700 p-1 rounded-md font-bold text-white" onClick={() => setColor("blue")}>Blue</button>
        <button className="bg-yellow-300 p-1 rounded-md font-bold text-white" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="bg-orange-500 p-1 rounded-md font-bold text-white" onClick={() => setColor("orange")}>Orange</button>
        <button className="bg-green-600 p-1 rounded-md font-bold text-white" onClick={() => setColor("green")}>Green</button>
        <button className="bg-slate-600 p-1 rounded-md font-bold text-white" onClick={() => setColor("#475569")}>Slate</button>
      </div>
    </div>
  )
}

export default App
