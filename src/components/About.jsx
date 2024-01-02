import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    let navigate = useNavigate();
  return (
    <div>
        <p>This sis Aboout Page</p>
        <button onClick={()=> navigate("/", {state:"From The About Page"})}>Redirect</button>
    </div>
  )
}

export default About