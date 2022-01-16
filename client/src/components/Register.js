import React, { useState } from 'react'
import Axios from 'axios'

function Register() {

    const [regUsername, setRegUsername] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [responseCode, setResponseCode] = useState(""); 

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            regUsername: regUsername,
            regPassword: regPassword,
        }).then((response) => {
            console.log("Success");
            console.log(response);
            setResponseCode(response.data);
        });
    }

    return (
        <div>
            <h1>Register</h1>

            <label>Username: </label>
            <input type="text" placeholder="Username" onChange={(e) => { setRegUsername(e.target.value) }}/> 
            <br />
            <label>Password: </label>
            <input type="password" placeholder="Password" onChange={(e) => { setRegPassword(e.target.value) }}/>
            <br /> 
            <button onClick={register}>Register</button>

            {
                (responseCode === "ER_DUP_ENTRY")
                ? <div>This username has already been taken</div>
                : <div></div>
            }
        </div> 
    )
}

export default Register
