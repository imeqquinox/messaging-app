import React from 'react';

import "./css/Chatcontainer.css"

function Chatcontainer() {
    return (
        <div className='chatcontainer'>
            <div className='chatcontainer__avatar'>
                <img src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png" alt="Avatar"/>
            </div>
            <div className='chatcontainer__title'>
                <div className='chatcontainer__title'>
                    Chat title
                </div>
            </div>
        </div>
    );
}

export default Chatcontainer;
