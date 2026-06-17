import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from './Button';

const Footer = () => {
  return (
    <footer className='w-full py-20 px-0 lg:px-4'>
      <div className='border-t border-slate-700 w-full py-20 flex flex-col gap-10 lg:flex-row justify-between lg:px-20 px-4'>
        <a href="/" className='text-white '>Flavor<span className='text-green-500 font-semibold text-lg'>Verse</span></a>

        <div>
          <h3 className='text-white'>QUICK LINKS</h3>
          <ul className='flex flex-col gap-2 text-white pt-2 text-[14px]'>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/service">Service</a>
            <a href="/contact">Contact</a>
            <a href="/chef">Chef</a>
          </ul>
        </div>

        <div>
          <h3 className='text-white'>LEGAL</h3>
          <ul className='flex flex-col gap-2 text-white pt-2 text-[14px]'>
            <a href="/terms">Terms and Conditions</a>
            <a href="/license">License Agreement</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/copyright">Copyright Information</a>
            <a href="/cookies">Cookies Policy</a>
          </ul>
        </div>

        <div>
          <h3 className='text-white'>Social Media</h3>
          <div className="flex mt-4 gap-3">
                <a
                    href='#'
                    className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                >
                    <FaFacebook size={18} />
                </a>

                <a
                    href='#'
                    className='bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                >
                    <FaInstagram size={18} />
                </a>
                <a
                    href='#'
                    className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                >
                    <FaTwitter size={18} />
                </a>
                <a
                    href='#'
                    className='bg-red-600 p-1.5 rounded-sm text-white hover:scale-110'
                >
                    <FaYoutube size={18} />
                </a>
          </div>
          
          <Button 
          title={"Sign In"}
          containerStyle='mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md min-w-[130px]'
          />
        </div>
      </div>

      <div className='text-slate-300 w-full flex items-end justify-center py-5'>CodeWave &copy; 2026</div>
    </footer>
  )
}

export default Footer