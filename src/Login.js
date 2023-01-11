import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.scss"

const Login = () => {

    const navigate=useNavigate();

    const goToHome=()=>{
        navigate("/home");
    }

  return (
    <div>
        <div className='container'>
        <h1>Login</h1>
        <Link to="/home">Link-HOME</Link>
        <br/>
        <Link to="/profile">Link-PROFILE</Link>
        <br/>
        <button onClick={()=>goToHome()}>Navigate</button>
        </div>
    </div>
  )
}

export default Login