import React from 'react'

import Chatcontainer from './Chatcontainer'
import "./css/Sidebar.css"

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__title'>
                <h2>Chats</h2>
            </div>
            <hr />

            <div className='sidebar__tabs'>
                <div className='sidebar__messages'>
                    Direct Messages
                </div>
                <div className='sidebar__friends'>
                    Friends
                </div>
            </div>

            <div className="sidebar__search"> 
                <input className="sidebar__searchbar" type="text" placeholder="Search Chats" />
            </div>

            <div className="sidebar__container">
                <Chatcontainer />
                <Chatcontainer />
                <Chatcontainer />
                <Chatcontainer />
                <Chatcontainer />
                <Chatcontainer />
                <Chatcontainer />
                <Chatcontainer />
                <Chatcontainer />
                <Chatcontainer />
                <Chatcontainer />
                <Chatcontainer />
                <Chatcontainer />
                <Chatcontainer />
                <Chatcontainer />
                <Chatcontainer />
            </div>
        </div>
    )
}

export default Sidebar
