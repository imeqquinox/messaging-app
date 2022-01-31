import React from 'react'

import Chatcontainer from './Chatcontainer'
import "./css/Sidebar.css"

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__title'>
                <h2>Chats</h2>
                <hr />
                <div className='sidebar__friends'>
                    Friends
                </div>
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
            </div>

            <div className='sidebar__add'>
                <button className='sidebar__addbtn' type="text">Add new contact</button>
            </div>
        </div>
    )
}

export default Sidebar
