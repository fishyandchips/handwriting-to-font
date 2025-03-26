import './App.css';
import Canvas from "./components/Canvas";

function App() {
  return (
    <>
      <div className="bg-[#25353C] h-screen p-[6rem]">
        <div className="text-[#FF6161] text-[10rem] flex flex-wrap w-[60%] select-none">handwriting to text</div>
      </div>

      <div className="bg-[#25353C] p-[6rem] relative">
        <Canvas />
        <div className="text-[#FF6161] text-[2.5rem] select-none">please write over the text below.</div>
        <div className="text-[#FFFFFF] text-[5.8rem] text-center flex flex-wrap tracking-[1.3rem] opacity-10 select-none">
          A QUICK BROWN FOX JUMPS OVER THE LAZY DOG while the five boxing wizards jump quickly
        </div>
      </div>

      <div className="bg-[#25353C] p-[6rem] relative">
        <Canvas />
        <div className="text-[#FF6161] text-[2.5rem] select-none">please write over the numbers below.</div>
        <div className="text-[#FFFFFF] text-[5.8rem] justify-center flex flex-wrap tracking-[1.3rem] opacity-10 select-none">
          0 1 2 3 4 5 6 7 8 9
        </div>
      </div>

      <div className="bg-[#25353C] p-[6rem] relative">
        <Canvas />
        <div className="text-[#FF6161] text-[2.5rem] select-none">please write over the symbols below.</div>
        <div className="text-[#FFFFFF] text-[5.8rem] text-center flex flex-wrap tracking-[1.3rem] opacity-10 select-none">
          ` ~ ! @ # $ % ^ & * ( ) - _ = + [ ] { } \ | ; : ' " , &lt; . &gt; / ?
        </div>
      </div>

      <div className="bg-[#25353C] p-[6rem] relative">
        <div className="text-[#FF6161] text-[2.5rem] select-none">preview text</div>
        <div className="bg-[#FFFFFF] w-full h-[80vh] mt-7 rounded-[3rem] p-[2rem]">
          <input placeholder="type/paste your text here" className="w-full text-[2rem] rounded-[1rem] p-[1rem] border border-[#3B3B3B] placeholder-gray-500 focus:border-black"></input>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#FF6161] text-[2rem] text-[#FFFFFF] font-bold p-[2rem] rounded-[2rem] mt-10 mx-auto hover:bg-[#E85555]">Download font</button>
        </div>
      </div>
    </>
  )
}

export default App
