//import Navbar from "../components/Navbar"

import { useState } from "react"
import UserForm from "../components/UserForm"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SignupPage = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    const handleSubmit = async() => {
        console.log({username});
        const requestBody = { username, email, password };
        try {
            const response = await axios.post("http://localhost:5005/auth/signup", requestBody)
        //console.log(response.json());
        if (response.status === 201){
            console.log("Signup is successful");
        }
        } catch (error) {
            const errorDescription = error.response.data.message;
            console.log("There was an error with the signup.", errorDescription);
        }
        
    }

    return(
        <>
        <h1>Signup</h1>
        <UserForm 
            username = { username }
            email={email}
            password={password}
            setUsername={setUsername}
            setEmail={setEmail}
            setPassword={setPassword}
            handleSubmit={handleSubmit} 
        />
        </>
    )
}

export default SignupPage