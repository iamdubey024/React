import { useState } from "react"

function App() {
  const [color, setColor] = useState("#1E90FF")

  return (
   <div className="w-full h-screen duration-200" 
   style={{backgroundColor:color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">

        <button onClick={()=>setColor("orange")} className="px-3 py-1 shadow-sm rounded-3xl text-white " style={{backgroundColor:'orange'}}>
          Orange
        </button>

        <button onClick={()=>setColor("white")} className="px-3 py-1 shadow-sm rounded-3xl text-black " style={{backgroundColor:'white'}}>
          White
        </button>

        <button onClick={()=>setColor("yellow")} className="px-3 py-1 shadow-sm rounded-3xl text-black " style={{backgroundColor:'yellow'}}>
          Yellow
        </button>

        <button  onClick={()=>setColor("grey")}className="px-3 py-1 shadow-sm rounded-3xl text-white " style={{backgroundColor:'grey'}}>
          Grey
        </button>

        <button  onClick={()=>setColor("green")}className="px-3 py-1 shadow-sm rounded-3xl text-white " style={{backgroundColor:'green'}}>
          Green
        </button>


        <button  onClick={()=>setColor("skyblue")}className="px-3 py-1 shadow-sm rounded-3xl text-white " style={{backgroundColor:'skyblue'}}>
          Skyblue
        </button>


        <button onClick={()=>setColor("#726250")} className="px-3 py-1 shadow-sm rounded-3xl text-white " style={{backgroundColor:'#726250'}}>
          Smoky Brown
        </button>

        <button onClick={()=>setColor("navy")} className="px-3 py-1 shadow-sm rounded-3xl text-white " style={{backgroundColor:'navy'}}>
          Navy Blue
        </button>

        <button onClick={()=>setColor("red")} className="px-3 py-1 shadow-sm rounded-3xl text-white " style={{backgroundColor:'red'}}>
          Red
        </button>

        <button onClick={()=>setColor("pink")} className="px-3 py-1 shadow-sm rounded-3xl text-black " style={{backgroundColor:'pink'}}>
          Pink
        </button>

        <button onClick={()=>setColor("beige")} className="px-3 py-1 shadow-sm rounded-3xl text-black " style={{backgroundColor:'beige'}}>
          Beige
        </button>

        <button onClick={()=>setColor("olive")} className="px-3 py-1 shadow-sm rounded-3xl text-white " style={{backgroundColor:'olive'}}>
          Olive
        </button>

        <button onClick={()=>setColor("black")} className="px-3 py-1 shadow-sm rounded-3xl text-white " style={{backgroundColor:'black'}}>
          Black
        </button>
        <button onClick={()=>setColor("blue")} className="px-3 py-1 shadow-sm rounded-3xl text-white " style={{backgroundColor:'blue'}}>
          Blue
        </button>

        <button onClick={()=>setColor("purple")} className="px-3 py-1 shadow-sm rounded-3xl text-white " style={{backgroundColor:'purple'}}>
          Purple
        </button>

      </div>
    </div>

   </div>
  )
}

export default App