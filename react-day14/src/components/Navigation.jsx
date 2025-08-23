import React from 'react'

function Navigation() {
  return (
    <div>
        <ul className='bg-gray-400 flex justify-end gap-5  py-4 text-pink-600 font-semibold hover:text-violet-500'>
            <li>Home</li>
            <li>products</li>
            <li>Category</li>
        </ul>
    </div>
  )
}

export default Navigation