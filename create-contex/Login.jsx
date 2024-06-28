import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import UserContext from './Context/UserContext';

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const {setUser} = useContext(UserContext);

    const handleSumit = (e) => {
        e.preventDefault();
        setUser({username,password});
    }
  return (
    <div>
        <h1>Login</h1>

        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username" />

        <input type="text"  
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password" />

        <button type="button" onClick={handleSumit}>Submit</button>
    </div>
  )
}

export default Login