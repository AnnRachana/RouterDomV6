import React from 'react'
// import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Home = ( {login}) => {
    // let loaction =useLocation();
    let navigate = useNavigate();
  return (
    <div>
      <p>This is Home</p>
      <button onClick={()=>{
        login();
        navigate('/dashboard')
      }}> Login</button>
      {/* <button onClick={login}>Login</button> */}
      {/* {loaction.state} */}
    </div>
  );
}

export default Home