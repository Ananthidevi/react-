import React from 'react'
import Message from './components/Message'
import Register from './components/Register';

function App() {
  let username = "Jaswanth shakthi";
  return (
    <div>
      {/* props passing another data here */}
      <Message name={username}/>
      <Register/>
    </div>
  )
}

export default App