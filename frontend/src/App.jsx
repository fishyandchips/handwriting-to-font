import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-[#25353C] h-screen p-[100px]">
        <div className="text-[#FF6161] text-[10rem] flex flex-wrap w-[60%]">handwriting to text</div>
      </div>

      <div className="bg-[#25353C] h-screen p-[100px]">
        <div className="text-[#FFFFFF] text-[3rem]">Write over the text below.</div>
        <div className="text-[#FFFFFF] text-[5rem] flex flex-wrap tracking-widest opacity-15 underline decoration-4 underline-offset-8">A QUICK BROWN FOX JUMPS OVER THE LAZY DOG while the five boxing wizards jump quickly</div>
      </div>
    </>
  )
}

export default App
