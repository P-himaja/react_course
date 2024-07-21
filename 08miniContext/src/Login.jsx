import React, { useContext, useState } from 'react'
import UserContext from './context/UserContext'

function Login() {
  const [password,setPassword] = useState('')
  const [username,setUsername] = useState('')
  const {setUser} = useContext(UserContext)

  const handleSubmit = () =>{
    setUser({username,password})
  }
  return (
    <div>
    <label htmlFor="username">Username:</label>
      <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
      <label htmlFor="password">Password:</label>
      <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>


    </div>

  )
}

export default Login