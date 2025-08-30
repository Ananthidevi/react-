import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-slate-800 text-white flex items-center justify-between p-4'>
        <div>
            <h1 className='font-bold text-xl'>Phone</h1>
        </div>

        <ul className='flex gap-4'>
            <li className='text-lg cursor-pointer'>
                <Link to="/">Home</Link>
            </li>
            <li className='text-lg cursor-pointer'><Link to="/users">Contacts</Link></li>
           
        </ul>
    </div>
  )
}

export default Navbar