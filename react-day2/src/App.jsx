import React from 'react'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Loginpage from './components/Loginpage'
import Registerpage from './components/Registerpage'
import Button from './components/Button'


function App() {
  return (
    <div>
      <Navbar/>
      <Homepage />
      <Loginpage />
      <Registerpage/>
      <Button />

    </div>

  )
}
export default App