import React from 'react'
import Navabr from './Navabr'

function Hero() {
  return (
    <div className='bg-cover bg-center h-[400px] md:h[600px] flex flex-coljustify-center items-center text-center'
      style={{backgroundImage: "url('https://media.istockphoto.com/id/1460007178/photo/library-books-on-table-and-background-for-studying-learning-and-research-in-education-school.jpg?s=612x612&w=0&k=20&c=OV_sdclWUExHy0VKPeZwyen2mO6g1NwAIBbLPT_Hd30=')"}}
        >
          <div className='backdrop-blur-md bg-white/40 p-2 ml-20 rounded-md max-w-2xl border border-white/40'>
          <h2 className='ml-4 text-3xl md:text-5xl font-semibold mb-4 text-black-200 drop-shadow' >"A book is like a garden carried in the pocket."</h2>
          <p className='text-md md:text-lg mb-6 text-black drop-shadow'>"Read the book and sharp your brain"</p>
         <button className='bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 text-lg'>View More</button>
          </div>
       
      
    </div>
  )
}

export default Hero