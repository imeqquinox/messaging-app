import React, { useState } from 'react';
import "./css/Chatboard.css"
import { io } from 'socket.io-client';

function Chatboard({ socket }) {

    const [message, setMessage] = useState("");

    const sendMessage = (message) => {
        socket.emit("send-message", message)
        setMessage("");
    }

    return ( 
        <div className='chatboard'>
            <div className='chatboard__header'>
                <div className='chatboard__title'>
                    Chat title
                </div>
            </div>

            <div className='chatboard__input'>
                <input className='chatboard__chatbar' type="text" placeholder='Aa' value={message} onChange={(e) => setMessage(e.target.value)} />
                <button className='chatboard__enter btn' onClick={() => sendMessage(message)}>Send</button>
            </div>
        </div>
    );
}

export default Chatboard;
