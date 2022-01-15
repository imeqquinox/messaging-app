import React, { useState } from 'react'
import Axios from 'axios'

function Register() {

    const [regUsername, setRegUsername] = useState("");
    const [regPassword, setRegPassword] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            regUsername: regUsername,
            regPassword: regPassword,
        }).then((response) => {
            console.log("Success");
        });
        console.log("Submit");
    }

    return (
        <div>
            <h1>Register</h1>

            {/* <form> */}
                <label>Username: </label>
                <input type="text" placeholder="Username" onChange={(e) => { setRegUsername(e.target.value) }}/> 
                <br />
                <label>Password: </label>
                <input type="password" placeholder="Password" onChange={(e) => { setRegPassword(e.target.value) }}/>
                <br /> 
                <button onClick={register}>Register</button>
            {/* </form> */}
        </div>
    )
}

export default Register
