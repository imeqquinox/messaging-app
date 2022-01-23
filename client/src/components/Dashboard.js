import React from 'react'
import Sidebar from './Sidebar'
import Chatboard from './Chatboard'
import Header from './Header'
import "./css/Dashboard.css"

function Dashboard({ username, socket }) {
    return (
        <div className='dashboard'>
            <Header username={username} />
            <div className='dashboard__main'>
                <div className='dashboard__sidebar'>
                    <Sidebar />
                </div>
                <div className='dashboard__chatboard'>
                    <Chatboard socket={socket} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
