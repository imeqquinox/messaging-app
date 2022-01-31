import React from 'react'

import Chatcontainer from './Chatcontainer'
import "./css/Sidebar.css"

function Sidebar({ setTrigger, contacts }) {
    const newContact = () => {
        setTrigger(true);
    }
    
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
                    {contacts.map(contact => <Chatcontainer contactName={contact}/>)}
            </div>

            <div className='sidebar__add'>
                <button className='sidebar__addbtn' type="text" onClick={newContact}>Add new contact</button>
            </div>
        </div>
    )
}

export default Sidebar
