import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

function Navbar() {
  return (
    <>
        <nav className="w-full fixed top flex justify-between align-center p-3">
            <div className="hidden md:block md:w-16 lg:block lg:w-16 ml-6 mt-5">
                <img className='hidden md:block md:w-16 lg:w-16 lg:block' src={Logo} alt="Logo" />
            </div>
            <div className='flex gap-10 p-7 font-bold'>
                <Link to="">HOME</Link>
                <Link to="location">LOCATION</Link>
                <Link to="about">ABOUT</Link>
                <Link to="contact">CONTACT</Link>
            </div>
            <div className="p-6">
                <Link className="text-slate-100 font-bold text-md bg-red-500 px-4 py-2" to="login">Login</Link>
            </div>
        </nav> 
    </>
  )
}

export default Navbar