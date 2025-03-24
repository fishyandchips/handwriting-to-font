import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-[#25353C] h-screen p-[6rem]">
        <div className="text-[#FF6161] text-[10rem] flex flex-wrap w-[60%] select-none">handwriting to text</div>
      </div>

      <div className="bg-[#25353C] p-[6rem]">
        <div className="text-[#FF6161] text-[2.5rem]">please write over the text below.</div>
        <div className="text-[#FFFFFF] text-[5.8rem] text-center flex flex-wrap tracking-[1.3rem] opacity-25 select-none">
          A QUICK BROWN FOX JUMPS OVER THE LAZY DOG while the five boxing wizards jump quickly
        </div>
      </div>

      <div className="bg-[#25353C] p-[6rem]">
        <div className="text-[#FF6161] text-[2.5rem]">please write over the numbers below.</div>
        <div className="text-[#FFFFFF] text-[5.8rem] justify-center flex flex-wrap tracking-[1.3rem] opacity-25 select-none">
          0 1 2 3 4 5 6 7 8 9
        </div>
      </div>

      <div className="bg-[#25353C] pl-[6rem] pr-[6rem] pb-[4rem]">
        <div className="text-[#FF6161] text-[2.5rem]">please write over the symbols below.</div>
        <div className="text-[#FFFFFF] text-[5.8rem] text-center flex flex-wrap tracking-[1.3rem] opacity-25 select-none">
          ` ~ ! @ # $ % ^ & * ( ) - _ = + [ ] { } \ | ; : ' " , &lt; . &gt; / ?
        </div>
      </div>
    </>
  )
}

export default App
