import React, { useState }from 'react'
import { io } from 'socket.io-client'

import Sidebar from './Sidebar'
import Chatboard from './Chatboard'
import Header from './Header'
import ContactPopup from './ContactPopup'
import "./css/Dashboard.css"

function Dashboard({ username }) {
    const [trigger, setTrigger] = useState(false);
    const [contacts, setContact] = useState([]);

    const socket = io("http://localhost:3001");
    socket.on("connect", () => {
      console.log(socket.id);
    })

    return (
        <div className='dashboard'>
            <Header username={username} />
            <div className='dashboard__main'>
                <div className='dashboard__sidebar'>
                    <Sidebar setTrigger={setTrigger} contacts={contacts}/>
                </div>
                <div className='dashboard__chatboard'>
                    <Chatboard socket={socket} username={username} />
                </div>
            </div>
        
            {trigger ? <ContactPopup trigger={trigger} setTrigger={setTrigger} 
                contacts={contacts} setContact={setContact} ownUsername={username}/> : null}
        </div>
    )
}

export default Dashboard
