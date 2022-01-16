import React, { useState } from 'react'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function Login({ login, setLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signin = () => {
        Axios.post("http://localhost:3001/signin", {
            username: username,
            password: password,
        }).then((response) => {
            setLogin(response.data.result);
        });

        if (login) 
        {
            navigate("/home");
        }
    };

    return (
        <div>
            <h1>Sign in</h1>

            <label>Username: </label>
            <input type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }}/> 
            <br />
            <label>Password: </label>
            <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}/>
            <br /> 
            <button onClick={signin}>Login</button>

            <Link to="/register">
                <label>Register</label>
            </Link>
        </div>
    );
}

export default Login
