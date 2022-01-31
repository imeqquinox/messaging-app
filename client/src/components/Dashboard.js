import React from 'react'
import { io } from 'socket.io-client'

import Sidebar from './Sidebar'
import Chatboard from './Chatboard'
import Header from './Header'
import "./css/Dashboard.css"

function Dashboard({ username }) {
    const socket = io("http://localhost:3001");
    socket.on("connect", () => {
      console.log(socket.id);
    })

    return (
        <div className='dashboard'>
            <Header username={username} />
            <div className='dashboard__main'>
                <div className='dashboard__sidebar'>
                    <Sidebar />
                </div>
                <div className='dashboard__chatboard'>
                    <Chatboard socket={socket} username={username} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
