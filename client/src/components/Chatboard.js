import React, { useState } from 'react';

import "./css/Chatboard.css"
import Chatcontent from './Chatcontent';

function Chatboard({ socket, username }) {
    const [message, setMessage] = useState("");

    const sendMessage = (message, id) => {
        socket.emit("send-message", message, id);
        setMessage("");
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

            <div className='chatboard__input'>
                <input className='chatboard__chatbar' type="text" placeholder='Aa' value={message} onChange={(e) => setMessage(e.target.value)} />
                <button className='chatboard__enter btn' onClick={() => sendMessage(message, username)}>Send</button>
            </div>
        </div>
    );
}

export default Chatboard;
