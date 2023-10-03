/* eslint-disable react/prop-types */
// This is a stateless component  

const UserForm = ( { username, setUsername, email, setEmail, password, setPassword, handleSubmit } ) => {
    
    const submitCallback = event => {
        event.preventDefault()
        handleSubmit()
    }

    return(
        
        <form className="text-3xl font-bold underline" onSubmit={submitCallback}>
            <label>Username<input type="text" value={username} id="username" autoComplete="on" onChange={event => setUsername(event.target.value)} /></label>
            <label>Email<input type="email" value={email} id="email" autoComplete="on" onChange={event => setEmail(event.target.value)} /></label>
            <label>Password<input type="password" minLength="6" value={password} id="password" onChange={event => setPassword(event.target.value)} /></label>
            <button type="submit">Signup</button>
        </form>
        
    );
}

export default UserForm