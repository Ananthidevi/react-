import React from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar-container'>
      <div>
        <h3>React app</h3>
      </div>
        <nav>
            <ul className='navbar-links'>
                <li>Home</li>
                <li>About</li>
                <li>Profile</li>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar