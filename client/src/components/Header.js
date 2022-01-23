import React from 'react';
import "./css/Header.css";

function Header({ username }) {
    return ( 
        <div className='header'>
            <h1>Welcome to messaging {username}</h1>
        </div>
    );
}

export default Header;
