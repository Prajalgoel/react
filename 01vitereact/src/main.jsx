import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank',
//     }, 
//     children : 'click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target ="_blank">visit google </a>
)

const anotherUser = "prajal"

const ReactElement = React.createElement(
  'a',
  {href:'https://google.com', target: "_blank"},
  'visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
    ReactElement
  
)
