import React, { useState } from 'react';

import "./css/Chatcontent.css"
import ChatMessage from './ChatMessage';

function Chatcontent({ socket, username }) {
    const [messages, setMessages] = useState([
        {
            messageClass: "",
            id: "",
            messages: ""
        }
    ]);

    socket.on("receive-message", (message, userID) => {
        const msgClass = userID === username ? "sent" : "received";

        const updateMessages = [
            ...messages,
            {
                messageClass: msgClass,
                id: userID, 
                messages: message
            }
        ]

        setMessages(updateMessages);
    });

    return (
        <div className='chatcontent'>
            <div className='chatcontent__messagecontainer'>
                {messages.map(msg => <ChatMessage message={msg.messages} id={msg.id} messageClass={msg.messageClass}/>)}
            </div>
        </div>
    );
}

export default Chatcontent;
