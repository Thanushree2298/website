import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 md:top-2 left-0 right-0 z-50 w-full flex justify-between transition-all duration-500 ease-in-out bg-transparent px-[40px] py-[10px]">
       {/* <div className='container mx-auto flex items-center justify-between bg-white bg-opacity-50 shadow-lg md:rounded-full px-[20px] py-[5px]'> */}
        {/* Logo */}
        <div className='relative w-42 h-12 p-1'>
        <Image 
        src="/images/logo_tharonyx.png"
        alt='logo'
        width={150}
        height={50}
        priority
         />

        </div>
         <div className='flex gap-[40px]'>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/Products">Products</Link>
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact us</Link>
         
            </div>
            {/* </div> */}
    </nav>
  )
}

export default Navbar