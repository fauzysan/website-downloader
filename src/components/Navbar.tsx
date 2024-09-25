"use client"
import React, { useState } from 'react'
import Link from "next/link"
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className=' p-4 shadow-xl border-b'>
        <div className='container mx-auto flex justify-between items-center'>
            <div className=" text-xl font-bold">
                <Link href="/">Web Downloader</Link>
            </div>
            <ul className='hidden md:flex space-x-4 p-5'>
                <li>
                    <Link href="/" className=' hover:underline px-5'>Home</Link>
                </li>
                <li>
                    <Link href="/project" className=' hover:underline px-5'>Project</Link>
                </li>
                <li>
                    <Link href="/about" className='hover:underline px-5'>About</Link>
                </li>
                <li>
                    <ModeToggle />
                </li>
            </ul>
            <div className="md:hidden flex items-center ">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {isOpen &&(
            <div className='md:hidden'>
                <Link href="/" className="block p-5 my-5 text-md text-center border-b hover:opacity-50">
                    Home
                </Link>
                <Link href="/project" className="block p-5 my-5 text-md text-center border-b hover:opacity-50">
                    Project
                </Link>
                <Link href="/about" className="block p-5 my-5 text-md text-center border-b hover:opacity-50">
                    About
                </Link>
                <div className='text-center'>
                    <ModeToggle />
                </div>
            </div>
        )}
    </nav>
    
  )
}

export default Navbar;