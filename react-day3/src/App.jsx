import React from 'react'
import Message from './components/Message'

function App() {
  let username = "Jaswanth shakthi";
  return (
    <div>
      {/* props passing another data here */}
      <Message name={username}/>
    </div>
  )
}

export default App