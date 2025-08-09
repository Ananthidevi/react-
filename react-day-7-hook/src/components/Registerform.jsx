import React, { useState } from 'react'

function Registerform() {
    const[username , putUsername] = useState("");

    const handleChange = (e)=>{
        putUsername(e.target.value);
    }
    const handleSubmit =(e) => {
        e.preventDefault();
        alert(`Helo ${username}, completed`);
        putUsername("");
    }
  return (
    <div>
        <h1>Register form</h1>
        <form onSubmit = {handleSubmit}>
            <label htmlFor="">Enter Your name</label>
            <input type = "text" onChange={handleChange} value={username}/><br></br>
            <button>Register</button>
        </form>
        <h3>{username}</h3>
        </div>
  )
}

export default Registerform