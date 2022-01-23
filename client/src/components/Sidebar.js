import React,  { useState } from 'react'

import Chatcontainer from './Chatcontainer'
import "./css/Sidebar.css"

function Sidebar() {

    const [activeTab, setActiveTab] = useState(0);

    const switchTab = (index) => {
        setActiveTab(index);
        console.log(index);
    }

    return (
        <div className='sidebar'>
            <div className='sidebar__title'>
                <h2>Chats</h2>
            </div>
            <hr />

            <div className='sidebar__tabs'>
                <div className='sidebar__messagestab' onClick={() => switchTab(0)}>
                    Direct Messages
                </div>
                <div className='sidebar__friendstab' onClick={() => switchTab(1)}>
                    Friends
                </div>
            </div>

            <div className="sidebar__search"> 
                <input className="sidebar__searchbar" type="text" placeholder="Search Chats" />
            </div>

            <div className="sidebar__container">
                {
                    (activeTab === 0) 
                    ?
                    <div className='sidebar__messages'>
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

                    :
                    <div className='sidebar__friends'>
                        Friends
                    </div>
                }
            </div>

            <div className='sidebar__add'>
                {
                    (activeTab === 0)
                    ? <button className='sidebar__conversation btn' type="text">New Conversation</button>
                    : <button className='sidebar__friend btn' type="text">New Conversation</button>
                }
            </div>
        </div>
    )
}

export default Sidebar
