import React, { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signin = () => {
        Axios.post("http://localhost:3001/signin", {
            username: username,
            password: password,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div>
            <h1>Sign in</h1>

            <form>
                <label>Username: </label>
                <input type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }}/> 
                <br />
                <label>Password: </label>
                <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}/>
                <br /> 
                <input type="submit" value="Login" onClick={signin}/>
            </form>

            <Link to="/register">
                <label>Register</label>
            </Link>
        </div>
    );
}

export default Login
