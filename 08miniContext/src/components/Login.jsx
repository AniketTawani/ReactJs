// this login component is all about setting the global variable that is our context!
// to feed the context or we can say to set the values.

import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const[username, setUsername] = useState('')
  const[password, setPassword] = React.useState('')

  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username,password})
  }
  return (
    <div>
        <h1>You are in the Login page!</h1>
        <input type='text' placeholder='username' value={username} onChange={(e)=>{
            setUsername(e.target.value)
        }}></input>
        {" "}
        <input type='text' placeholder='password' value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }}></input>
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login