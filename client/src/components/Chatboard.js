import React, { useState } from 'react';

import "./css/Chatboard.css"
import Chatcontent from './Chatcontent';

function Chatboard({ socket, username }) {
    const [message, setMessage] = useState("");

    const handleSumbit = (e) => {
        e.preventDefault();
        sendMessage(message, username);
    }

    const sendMessage = (message, id) => {
        if (message === "") {
            return; 
        }
        else
        {
            socket.emit("send-message", message, id);
            setMessage("");
        }
    }

    return ( 
        <div className='chatboard'>
            <div className='chatboard__header'>
                <div className='chatboard__title'>
                    Chat title
                </div>
            </div>

            <div className='chatboard__container'>
                <Chatcontent socket={socket} username={username}/>
            </div>

            <form className='chatboard__input' onSubmit={handleSumbit}>
                <input className='chatboard__chatbar' type="text" placeholder='Aa' value={message} onChange={(e) => setMessage(e.target.value)} />
                <button className='chatboard__enter btn' type="submit">Send</button>
            </form>
        </div>
    );
}

export default Chatboard;
