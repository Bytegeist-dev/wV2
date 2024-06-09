import React from 'react'

export default function Header() {
  return (
    <div>
        <header className='font-poppins flex items-center justify-between w-full p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
            <div>
            <h1 className='text-2xl font-bold text-gray-800 font-poppins'>b.</h1>
            </div>
            <nav>
            <ul className='flex items-center space-x-4'>
                <li>
                <a href='#' className='text-gray-800 hover:text-gray-600'>
                    Home
                </a>
                </li>
                <li>
                <a href='#' className='text-gray-800 hover:text-gray-600'>
                    About
                </a>
                </li>
                <li>
                <a href='#' className='text-gray-800 hover:text-gray-600'>
                    Services
                </a>
                </li>
                <li>
                <a href='#' className='text-gray-800 hover:text-gray-600'>
                    Contact
                </a>
                </li>
            </ul>
            </nav>
        </header>
    </div>
  )
}
