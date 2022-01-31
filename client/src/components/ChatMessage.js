import React from 'react';
import "./css/ChatMessage.css"

function ChatMessage({ message, id, messageClass}) {
    
    return (
        <div className={`message ${messageClass}`}>
            <p>{id}</p>
            <p>{message}</p>
        </div>
    );
}

export default ChatMessage;
