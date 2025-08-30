import React from 'react'
import Home from './components/Home'
import Users from './components/Users'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='users' element={<Users />}/>
      </Routes>
    </div>
  )
}

export default App