//import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext() 

// eslint-disable-next-line react/prop-types
const AuthProviderWrapper = ({ children }) => {
  const [isLoading, setIsloading] = useState(true)  
  const [token, setToken] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
   

  const verifyToken = async (jwt) => {
    try {
      // const verifyRequest = await axios.post("http://localhost:5005/auth/verify", { headers: {
      //     authorization: `Bearer ${jwt}`
      //   } })
      const verifyRequest = await fetch('http://localhost:5005/auth/verify', {
        method: 'POST',
        headers: {
          authorization: `Bearer ${jwt}`
        },
      })
      const parsed = await verifyRequest.json()
      console.log(parsed);
      setToken(jwt)
      setIsloading(false)
      setIsAuthenticated(true)
    } catch (error) {
      console.log("There was an error with the token verifying request.", error)
    }
    
  }
  
  useEffect(()=>{
      const accessToken = window.localStorage.getItem("authToken")
      console.log(accessToken);
      verifyToken(accessToken)
    }, [])

    useEffect(()=>{
      if (token) {
        window.localStorage.setItem("authToken", token)
        if(!isAuthenticated) {
          setIsAuthenticated(true)
        }
      }
    }, [token])

    const logOutUser = () => {
      localStorage.removeItem("authToken");
      setIsloading(true)
      setIsAuthenticated(false)
    };

    
    return <SessionContext.Provider value={{token, setToken, isLoading, isAuthenticated,logOutUser}}>{ children }</SessionContext.Provider>
    
  }
  
  export default AuthProviderWrapper