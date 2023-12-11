import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import Box from './Box'
import Members from './Members'
import './Member.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div><Box></Box></div>
      <div><Greeting></Greeting> </div>
       <div><Members></Members></div>
     
    </>
  )
}

export default App
