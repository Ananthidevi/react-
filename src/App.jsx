import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <>
    <div className='flex justify-between items-center p-4 bg-cyan-200 mb-4'>
      <div>
        <h2 className='font-semibold text-3xl cursor-pointer'>My Website</h2>
      </div>
      <div>
        <ul className='flex gap-5'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Products</li>
          <li className='cursor-pointer'>Contacts</li>
        </ul>
       
      </div>


    </div>
    <Card/>
    </>
    


  )
}

export default App