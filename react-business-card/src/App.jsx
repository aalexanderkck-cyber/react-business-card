import { useState } from 'react'
import {createRoot} from 'react-dom/client'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return ( <>

  {/* TODO: Debug img */}
 {/* <img src="react-business-card/src/assets/headshot.jpeg" alt="Aaron Alexander" />  <h2>Software Engineer</h2> */}
  <p>I'm a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB. I'm always looking to learn new technologies and improve my skills.</p>
  </> )
    
     
}

export default App
