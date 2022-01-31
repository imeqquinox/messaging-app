import React from 'react';

import "./css/Chatcontainer.css"

function Chatcontainer({ contactName }) {
    return (
        <div className='chatcontainer'>
            <div className='chatcontainer__avatar'>
                <img src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png" alt="Avatar"/>
            </div>
            <div className='chatcontainer__title'>
                <h3 className='chatcontainer__name'>{contactName}</h3>
            </div>
        </div>
    );
}

export default Chatcontainer;
