import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let Myobj = {
    usrname:"Aniket",
    age : 24
  }

  let newArray = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-3 rounded-xl mb-2'>This is tailwind css!</h1>
      <Card username="Aniket" btnTxt="Click Me!!!!!!"/>
      <Card username="Sumit"/>
      <Card someObj={Myobj}/>
      <Card username="Array card!" someArr={newArray}/>
    </>
  )
}

export default App
