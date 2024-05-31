import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)

      
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    
      <div className='w-full text-orange-500  max-w-md mx-auto  px-4 my-8 rounded-lg bg-gray-600 shadow-md'>
    <h1 className='  text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow-md rounded-lg overflow-hidden mb-4 '>
    <input type="text" value={password} className='outline-none w-full py-1 px-3 ' placeholder='Password' readOnly
      ref={passwordRef} />
    <button 
    onClick={copyPasswordToClipboard}
    className=' bg-blue-700 text-white px-3 py-0.5 outline-none shrink-0'>Copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>

        <input type="range" min={6} max={24}
        value={length} className='cursor-pointer' 
        onChange={(e)=>{setLength(e.target.value)}} />
        <label>Length: {length}</label>

        {/* for Numbers */}
        <div className='flex items-center gap-x-1'>
          
        <input type="checkbox" defaultChecked={numberAllowed} id='numberInput'
        onChange={()=>{setNumberAllowed((prev)=>!prev);

        }} />
        <label htmlFor='numberInput'>Numbers</label>
        </div>


         {/* for Characters */}
         <div className='flex items-center gap-x-1'>
          
          <input type="checkbox" defaultChecked={charAllowed} id='charInput'
          onChange={()=>{setCharAllowed((prev)=>!prev);
  
          }} />
          <label htmlFor='charInput'>Characters</label>
          </div>
        
      </div>
    </div>
      </div>
    </>
  )
}

export default App
