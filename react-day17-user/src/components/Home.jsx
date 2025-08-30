import React from "react"
import { Link } from 'react-router-dom'

function Home() {
    return(
        <div className='p-6 flex flex-col justify-center items-center h-[600px]'>
             <h2 className='text-3xl font-bold'>Welcome! </h2>
        <p className='mt-4 text-lg text-gray-700'>Touch here to see my contacts</p>
        <button className='bg-blue-600 px-4 py-3 mt-6 text-white font-semibold rounded text-lg'><Link to="/users">My contacts</Link></button>
   </div>
        
    )
}

export default Home