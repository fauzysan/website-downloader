import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import design from "@/app/image/slider-dec.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div className=' w-full h-screen'>
        <div className='container flex space-x-5 justify-center items-center py-52 mx-auto'>
           <div className='md:flex md:space-x-40 '>
                <div className='p-5'>
                    <p className='text-4xl mb-16'>Website Downloads Gratis!</p>
                    <p className='my-10'>Tempat download video atau musik unlimited gratis hanya dengan url saja!</p>
                    <Button className='mt-9'>
                        <Link href="/project"> Learn More! <FontAwesomeIcon icon={faChevronRight} className='fa-solid fa-chevron-right'></FontAwesomeIcon></Link>
                    </Button>
                </div>
                <div className=''>
                    <img src={design.src} alt="" />
                </div>
           </div>
        </div>
    </div>
  )
}

export default Hero