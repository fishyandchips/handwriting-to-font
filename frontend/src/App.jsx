import './App.css';
import Canvas from "./components/Canvas";

function App() {
  const handleExtractAll = () => {
    const canvases = document.querySelectorAll('canvas');
  
    canvases.forEach((canvas) => {
      extractCanvas(canvas);
    });
  };

  const extractCanvas = (canvasRef) => {
    const canvasUrl = canvasRef.toDataURL();
    console.log('Canvas: ', canvasUrl);
  }
  
  return (
    <>
      <div className="bg-[#25353C] h-screen p-[6rem]">
        <div className="text-[#FF6161] text-[10rem] flex flex-wrap w-[60%] select-none">handwriting to font</div>
      </div>

      <div className="bg-[#25353C] p-[6rem] relative">
        <div className="text-[#FF6161] text-[2.5rem] select-none">please write over the text below.</div>
        <div className="h-[50rem] w-[100%] flex flex-wrap">
          <GridOverlay rows={6} cols={9} characters={[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrs tuvwxyz"]}/>

          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>

          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>

          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>

          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>

          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>

          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
          <Canvas rows={6} cols={9}/>
        </div>
      </div>

      <div className="bg-[#25353C] p-[6rem] relative">
        <div className="text-[#FF6161] text-[2.5rem] select-none">please write over the numbers below.</div>
        <div className="h-[10rem] w-[100%] flex flex-wrap">
          <GridOverlay rows={1} cols={12} characters={[..." 0123456789"]}/>

          <Canvas rows={1} cols={12}/>
          <Canvas rows={1} cols={12}/>
          <Canvas rows={1} cols={12}/>
          <Canvas rows={1} cols={12}/>
          <Canvas rows={1} cols={12}/>
          <Canvas rows={1} cols={12}/>
          <Canvas rows={1} cols={12}/>
          <Canvas rows={1} cols={12}/>
          <Canvas rows={1} cols={12}/>
          <Canvas rows={1} cols={12}/>
          <Canvas rows={1} cols={12}/>
          <Canvas rows={1} cols={12}/>
        </div>
      </div>

      <div className="bg-[#25353C] p-[6rem] relative">
        <div className="text-[#FF6161] text-[2.5rem] select-none">please write over the symbols below.</div>
        <div className="h-[27rem] w-[100%] flex flex-wrap">
          <GridOverlay rows={3} cols={12} characters={[
            '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
            '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|', ';', ':',
            ' ', ' ', '\'', '"', ',', '<', '.', '>', '/', '?'
          ]}/>

          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>

          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>

          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
          <Canvas rows={3} cols={12}/>
        </div>
      </div>

      <div className="bg-[#25353C] p-[6rem] relative">
        <div className="text-[#FF6161] text-[2.5rem] select-none">preview text</div>
        <div className="bg-[#FFFFFF] w-full h-[80vh] mt-7 rounded-[3rem] p-[2rem]">
          <input placeholder="type/paste your text here" className="w-full text-[2rem] rounded-[1rem] p-[1rem] border border-[#3B3B3B] placeholder-gray-500 focus:border-black"></input>
        </div>
        <div className="flex justify-center">
          <button onClick={handleExtractAll} className="bg-[#FF6161] text-[2rem] text-[#FFFFFF] font-bold p-[2rem] rounded-[2rem] mt-10 mx-auto hover:bg-[#E85555]">Download font</button>
        </div>
      </div>
    </>
  )
}

function GridOverlay({ rows, cols, characters }) {
  const totalCells = Array.from({ length: rows * cols });

  return (
    <div
      className="absolute z-[5] pointer-events-none h-[calc(100%-15.8rem)] w-[calc(100%-12rem)]"
      style={{
        display: 'grid',
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {totalCells.map((_, i) => (
        <div key={i} className="border border-white border-opacity-20 relative">
          <span className="absolute inset-0 flex justify-center items-center text-white text-opacity-30 text-[5.8rem]">
            {characters[i] || ""}
          </span>
        </div>
      ))}
    </div>
  );
}

export default App
