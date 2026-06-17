import React from 'react'
import {Banner1, Banner2, Banner3, Banner4, Banner5} from "../assets/index";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

const Header = ({image, title, type}) => {
  return (
    <div className='w-full h-[100vh]'>
        <div className='w-full h-full relative'>
            <img src={image ?? images[Math.floor(Math.random() * images.length)]} alt="" className='w-full h-full object-cover'/>

            <div className='w-full h-full absolute top-0 z-8 bg-gradient-to-t from-black to-transparent flex flex-col justify-center items-center'>
                <h1 className='text-4xl lg:text-5xl font-bold text-white text-center'>{title}</h1>
                {
                    type && (
                        <p className='text-green-500 bg-[#00000090] px-6 py-3 text-center text-sm rounded-full mt-4'>Welcome to FlavorVerse, your passport to culinary adventures! Discover a treasure trove of delectable <br className='hidden lg:block'/>recipes from around the globe.</p>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Header