import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
const obj = {
  username: 'Anusha',
  age: '17'
}
  return (
    <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
<Card  username = 'Himaja Pannati'  btnText = 'Click me'/>
<Card  username = 'Anusha Pannati' />


    </>
  )
}

export default App
