import React from 'react'
import Button from './Button'

function Register() {
  return (
    <div>
        <h3>Register page</h3>
        <form>
            <input type = "email" placeholder='anu@gmail.com'/>
            <input type = "text" placeholder='diswa'/>
            <input type = "password" placeholder='****'/>
            <input type = "password" placeholder='confirm password'/>
            <Button label = "Register"/>
        </form>
    </div>
  )
}

export default Register