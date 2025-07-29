import React from 'react'
import Button from './Button'
import "./Button.css";
function Loginpage() {
  return (
    <div>
        <h2>Login</h2>
        <input type = "email" placeholder='don@gmail.com'/>
        <input type = "password" placeholder='****'/>
        <Button />
    </div>
  )
}

export default Loginpage