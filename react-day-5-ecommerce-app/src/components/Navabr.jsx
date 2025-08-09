import React from 'react'
import {Menu,X} from "lucide-react";
import { useState } from 'react';
//menu-menubar x closing icon

function Navabr() {
    const [inopen , setInopen] = useState(false);//inopen os vari  setInopen is fun usestate-menu opening and closing purpose
    const toggleMenu = () => {
        setInopen(!inopen);//when you call toggle button and its opp of false
    }
  return (
    <nav className='bg-white shadow-md fixed w-full'>
        <div className='max-w-7xl mx-auto px-6 sm: px-6 lg: px-8'> 
            {/* mx-margin x axis sm-small medium lg-lrgestmedium px-6 mobile screen */}
            <div className='flex justify-between h-16 items-center'>
                <div className='font-semibold text-xl text-pink-500'>
                    shopify.
                </div>
                <div className='hidden md:flex space-x-6'>
                    <a href="">Home</a>
                    <a href="">Products</a>
                    <a href="">Contacts</a>
                </div>
                {/* Mobile menu */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {
                            inopen ? <X /> :<Menu />
                        }

                    </button>
                </div>
            </div>
        </div>
        {/* mobile menu design */}
        {
            inopen && (
                <div className='md:hidden bg-white px-4 pb-4 space-y-3 shadow'>
                    <a href=""className='block text-green-600 font-semibold hover:text-blue-600'>Home</a>
                    <a href=""className='block text-green-600 font-semibold hover:text-blue-600'>Products</a>
                    <a href=""className='block text-green-600 font-semibold hover:text-blue-600'>Contacts</a> 
                </div>
            )
        }

    </nav>
  )
}

export default Navabr