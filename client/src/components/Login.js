import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import { Link } from 'react-router-dom';

async function loginUser(credentials, username, password) {
    return Axios({
        url: "http://localhost:3001/signin",
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        data: {
            username: username, 
            password: password
        },
        body: JSON.stringify(credentials)
    })
        .then(response => {
            return response.data;
        })
        .catch(err => console.log(err))
}

function Login({ setToken, username, setUsername }) {

    // const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault(); 
        const token = await loginUser(
            { username, password },
            username, 
            password
        );
        setToken(token);
    }

    return (
        <div>
            <h1>Sign in</h1>

            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }}/> 
                <br />
                
                <label>Password: </label>
                <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}/>
                <br /> 

                <button type="submit">Login</button>
            </form>


            <Link to="/register">
                <label>Register</label>
            </Link>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login
