//import Navbar from "../components/Navbar"

import { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {SessionContext} from "..//..//context//SessionContext"

const LoginPage = () => {
  const navigate = useNavigate()
 
  const  { setToken }  = useContext(SessionContext)
 
  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")
  
  
  const submitLogin = async event => {
    event.preventDefault()
    
    try {
      const loginRequest = await axios.post("http://localhost:5005/auth/login", { username, password })
      
     if (loginRequest.status === 200){
        console.log("Login is successfel");
        
         const jsToken = loginRequest.data.token
         console.log(jsToken);
         setToken(jsToken)
         navigate("/profile-page") 
        
      }  
    } catch (error) {
        //const errorDescription = error.response.data.message;
        console.log("There was an error with the login.", error);
    }
  }
    return (
      <>
      <div>SignupPage - temporary</div>
      <form className="text-3xl font-bold" onSubmit={submitLogin}>
        <label>Username<input type="text" value={username} id="username" autoComplete="on" onChange={event => setUsername(event.target.value)} />
        </label>
        <label>Password<input type="text" value={password} id="password" autoComplete="on" onChange={event => setPassword(event.target.value)} />
        </label>
        <button type="submit">Login</button>

      </form>
      </>
      )
  }
  
  export default LoginPage