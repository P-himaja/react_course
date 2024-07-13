import { number } from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
const [length,setLength] = useState(8);
const [numAllowed,setNumAllowed] = useState(false)
const [charAllowed,setCharAllowed] = useState(false)
const [password,setPassword] = useState("")

const passwordRef = useRef(null)

const passwordGenerator = useCallback( () =>{
let pass =""
let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if(numAllowed) string+="0987654321"
if(charAllowed) string+="!@#$%^&*()_+-=[]{}|~`"

for(let i =0 ; i<length ; i++){
  let char = Math.floor(Math.random()* string.length)
  pass += string.charAt(char)
}
setPassword(pass)
},[length,numAllowed,charAllowed,setPassword])

const copyPasswordToCLipboard = useCallback( () =>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,50)
window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordGenerator()
},[length,numAllowed,charAllowed,passwordGenerator])


  return (
  
    <div className='w-full max-w-md mx-auto shawdow-md rounded-lg px-4 py-3 my-8  bg-gray-800 text-white'>
<div className='text-yellow-700 text-3xl text-center my-8'>Password Generator</div>
<div className='flex overflow-hidden mb-4'>
  <input 
  className='w-full outline-none text-black px-2 py-1 rounded-l-xl '
  type="text"
  value={password}
  placeholder="Password"
  readOnly
  ref={passwordRef} />
  <button 
  onClick={copyPasswordToCLipboard} className='rounded-r-xl bg-blue-700 px-2 py-1 shrink-0 text-white hover:bg-blue-600'>copy</button>
  </div>
  <div className='flex text-sm  text-blue-500 '>
  <div className="flex gap-3 ">
    <input 
    className="w-25 cursor-pointer"
    onChange={(e)=>setLength(e.target.value)}
    type="range" 
    min={6}
    max={50} 
    name="length" />
    <label htmlFor="length">Length: {length}</label>
</div>
<div className="ml-2 flex gap-1">
    <input 
    className=""
    onClick={()=>setNumAllowed((prev)=>!prev)}
    type="checkbox" 
    name="length" />
    <label htmlFor="length">Number</label>
    </div>
    <div className="ml-2 flex gap-1">
    <input 
    className=""
    onClick={()=>setCharAllowed((prev)=>!prev)}
    type="checkbox" 
    name="character" />
    <label htmlFor="character">Character</label>
    </div>
    </div>
</div>
    

  )
}

export default App
