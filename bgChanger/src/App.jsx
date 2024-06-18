import { useState } from 'react'

function App() {
  const [color, setColor] = useState('purple')

  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>
        {/* <h1>Test</h1> */}
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
        {/* <h1>Test</h1> */}
          <button className='outline-none rounded-full px-4 shadow-lg text-white' style={{backgroundColor:"red"}} onClick={()=>setColor('red')}>Red</button>
          <button className='outline-none rounded-full px-4 shadow-lg text-white' style={{backgroundColor:"green"}} onClick={()=>setColor('green')}>Green</button>
          <button className='outline-none rounded-full px-4 shadow-lg text-white' style={{backgroundColor:"olive"}} onClick={()=>setColor('olive')}>Olive</button>
          <button className='outline-none rounded-full px-4 shadow-lg text-white' style={{backgroundColor:"yellow"}} onClick={()=>setColor('yellow')}>Yellow</button>
          <button className='outline-none rounded-full px-4 shadow-lg text-white' style={{backgroundColor:"orange"}} onClick={()=>setColor('orange')}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
