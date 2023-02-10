import React from "react";
import logo from './Logo.svg';

function Nav() {
    return (
        <ul>
            <li><div className="Logo"><img src={logo} alt="Little Lemon Logo" /></div></li>
            <li><a href="./Header.js">Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
        </ul>
    );
}

export default Nav;