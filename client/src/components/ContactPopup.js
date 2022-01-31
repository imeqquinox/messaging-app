import React, { useState } from 'react';
import Axios from 'axios'

import "./css/ContactPopup.css"

function ContactPopup({ trigger, setTrigger, contacts, setContact, ownUsername }) {
    const [username, setUsername] = useState("");
    const [usernameCheck, setUsernameCheck] = useState("");

    const handleClose = () => {
        setTrigger(!trigger);
    }
    
    // Handle post call to server for checking username in database
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the user is trying to add themselfs

        // Query database for other user
        Axios.post("http://localhost:3001/query", {
            username: username
        }).then((response) => {
            setUsernameCheck(response.data);

            // Check user is not already in contacts or trying to add ourself
            if (username === ownUsername){
                setUsernameCheck("You can not add yourself as a contact");
                return;
            }

            for (var i = 0; i < contacts.length; i++) {
                if (username === contacts[i])  {
                    setUsernameCheck("You already have that user in your contacts");
                    return;
                }
            }

            // Add user to contacts
            if (response.data === "User has been added as a contact") {
                setContact(prevContacts => [...prevContacts, username]);
            } 
        });
    }

    return (
        <div className='contactpopup'>
            <span className='contactpopup__close' onClick={handleClose}>&times;</span>
            <div className='contactpopup__content'>
                <h1>New Contact</h1>
                <form onSubmit={handleSubmit}>
                    <span>Username: </span>
                    <input type="text" placeholder='Username' onChange={(e) => { setUsername(e.target.value) }}/>
                    <button type="submit">Add</button>
                </form>
                <div className='contactpopup__usernamecheck'>
                    {usernameCheck}
                </div>
            </div>
        </div>
    );
}

export default ContactPopup;
