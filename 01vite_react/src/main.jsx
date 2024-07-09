import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
  <h3>Hey this is a function</h3>
  )
}
/*
const reactElement = {
  type : 'a',
  props : {
    href : 'https://www.google.com',
    target : '_blank'
  },
  children : 'CLick me to visit google'
}
*/
const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Click me to go to google</a>
)
const anotherUser = 'Anusha'
const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com',
    target : '_blank'},
'Click me google',
anotherUser
//variable is injected here 
)
ReactDOM.createRoot(document.getElementById('root')).render(
<App/>
)
