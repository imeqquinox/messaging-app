import React from 'react'

function Sidebar() {
    return (
        <div>
            <h1>Chats</h1>
            {/* These will be tab options */}
            <div>
                Direct Messages <br />
                Friends
            </div>

            <input type="text" placeholder="Search Chats" />
            {/* Chats Component */}
        </div>
    )
}

export default Sidebar
