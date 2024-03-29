import React from 'react'
import {hamburger } from '../assets/icons/index'
const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
            <img src="/logo.png" alt="logo" width={70} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>

        </ul>
      </nav>
    </header>
  )
}

export default Navbar
