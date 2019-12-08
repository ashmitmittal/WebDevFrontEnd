import React from 'react';
import './navbar.css';

function Navbar() {
    return(
        <header>
            <h2><a href="https://github.com">Recipe App</a></h2>
            <nav>
                <li><a href="https://github.com">New Recipe</a></li>
                <li><a href="https://github.com">Home</a></li>
                <li><a href="https://github.com">About</a></li>
                <li><a href="https://github.com">Contact</a></li>
            </nav>
        </header>
    );
}

export default Navbar;