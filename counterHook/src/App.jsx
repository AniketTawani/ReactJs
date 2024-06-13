import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count+1);
  }

  const removeValue = () =>{
    setCount(count-1);
  }

  return (
    <>
      <h1>counter: {count}</h1>
      <button onClick={addValue}>Increment : {count}</button>
      <button onClick={removeValue}>Decrement : {count}</button>
    </>
  )
}

export default App
