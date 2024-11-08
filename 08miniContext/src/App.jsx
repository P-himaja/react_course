import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

import Login from './Login'
import Profile from './Profile'
function App() {

  return (
    <UserContextProvider>
    <h1>Sujatha's CookBook</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
