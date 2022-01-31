import React, { useState } from 'react';

import "./css/Chatcontent.css"
import ChatMessage from './ChatMessage';

function Chatcontent({ socket, username }) {
    // const [messageClass, setMessageClass] = useState([]);
    // const [id, setID] = useState([]);
    // const [messages, setMessages] = useState([]);

    const [messages, setMessages] = useState([
        {
            messageClass: "",
            id: "",
            messages: ""
        }
    ]);

    socket.on("receive-message", (message, userID) => {
        const msgClass = userID === username ? "sent" : "received";
        // setMessageClass(prevMsgClass => [...prevMsgClass, msgClass]);
        // setID(prevIDs => [...prevIDs, userID]);
        // setMessages(prevChats => [...prevChats, message]);

        // Okay... this is very very bad. BUT it works....
        // setMessageObject(prevMsgObject => ({
        //     ...prevMsgObject,
        //     messageObjects: {
        //         messageClass: messageObject.messageObjects.messageClass.push(msgClass),
        //         id: messageObject.messageObjects.id.push(userID),
        //         messages: messageObject.messageObjects.messages.push(message)
        //     }
        // }))

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
                {/* {messages.map(msg => <ChatMessage message={msg} id={id} username={username}/>)} */}
                {
                    messages.map(msg => <ChatMessage message={msg.messages} id={msg.id} messageClass={msg.messageClass}/>)
                }
            </div>
        </div>
    );
}

export default Chatcontent;
