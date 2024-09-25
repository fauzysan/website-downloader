import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='container mx-auto text-center my-10 border-t'>
        <p className='mt-5'>&copy; {new Date().getFullYear()} <Link href="https://github.com/fauzysan" target='_blank' className='hover:opacity-50'>FauzyHafidz</Link>. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">
            Twitter
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">
            Instagram
          </a>
        </div>
        </div>
    </footer>
  )
}

export default Footer