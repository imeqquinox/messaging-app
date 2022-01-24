import React, { useEffect, useState } from 'react';


// Message component (contents of user message) - Displaying both out going and in coming? 
//                                              - 1 Message component which contents all the messages? 
function Chatcontent({ socket }) {
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        socket.on("receive-message", message => {
            //messages.push(message);
            console.log(messages);
            setMessages(prevChats => [...prevChats, message]);
        });
    }, [])
    

    return (
        <div>
            { messages.map(txt => <p>{txt}</p>)}
        </div>
    );
}

export default Chatcontent;
