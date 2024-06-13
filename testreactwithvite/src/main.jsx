import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyName(){
  return(
    <h1>Hello,You are inside the myName function!</h1>
  )
}

const anotherElement = (
  <a href='https://google.com' target='_blank'>Go to google site!</a>
)
const anotherVariable = " Hello Aniket"
const anotherUser = React.createElement(
  'a',
  {href:"https://google.com", target:"_blank"},
  'Go to anikets company',
  anotherVariable
)

ReactDOM.createRoot(document.getElementById('root')).render(
    anotherUser
)
