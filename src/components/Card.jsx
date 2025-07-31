import React from 'react'
import {View} from 'lucide-react';
import{BookOpenText} from 'lucide-react';

// npm i lucide-react

function Card() {
  return (
    //card parent div
    <div className='max-w-sm bg-gray-200 rounded-2xl shadow-lg p-3 hover:shadow 5xl '>
        <img  className='w-full h-70 object-cover rounded-xl mb-4'src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsmi93MSf9YdgjakEqUxp4pUWe6zzAH-TDzw&s"/>
   <h2 className='text-xl font-bold text-black-500 mb-4'><BookOpenText size ={20}/>Book</h2>
   <p className='text-gray-700 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quas doloribus nesciunt aspernatur quaerat fugiat. Cumque amet labore, quia aliquid eum vel tempore et assumenda placeat reiciendis ullam! Iure, sunt!</p>
    <button className='bg-purple-500 text-white px-4 py-2 rounded-3xl hover:bg-teal-700 cursor-pointer'><View />View more</button>
    </div>
  )
}

export default Card