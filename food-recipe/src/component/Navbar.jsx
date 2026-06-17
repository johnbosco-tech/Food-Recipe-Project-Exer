import { useState } from 'react'
import logo from "../assets/images/logo.png"
import Button from './Button'
import { CgMenuRight } from "react-icons/cg";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true)

    const toggleMenu = ()=>{
        setIsMenuOpen((prev)=> !prev)
    }

  return (
    <header className='w-full fixed top-0 z-10 bg-[#000000f1] border-b border-slate-900 shadow-lg'>
        <nav className='flex flex-row items-center justify-between px-4 lg:px-20 py-2'>
            <a href="/" className='flex items-center gap-1'>
                <img src={logo} alt="Logo" className='hidden lg:block w-15 h-15'/>
                <span className='text-lg text-gray-300'>FlavorVerse</span>
            </a>

            <ul className='hidden lg:flex items-center gap-6 text-slate-200'>
                <li>
                    <a href="/">Home</a>
                </li>
                <Link to={'/recipePage'} className='text-sm'>Recipes</Link>
                <li>
                    <a href="/favorites">Favorites</a>
                </li>
            </ul>

            <Button 
             title="Sign In"
             containerStyle='w-[120px] py-2 border border-white rounded-full bg-transparent text-white hover:bg-white hover:text-slate-800 cursor-pointer hidden lg:block'
            />

            <button
             onClick={toggleMenu}
             className='block lg:hidden cursor-pointer'
            >
                <CgMenuRight className={`${isMenuOpen ? "block" : "hidden"} text-white`} size={26}/>
                <RiCloseLargeLine className={`${isMenuOpen ? "hidden" : "block"} text-white`} size={26}/>
            </button>
        </nav>

        <div className={`${isMenuOpen ? "hidden" : "block"} lg:hidden`}>
            <ul className='flex flex-col px-4 gap-4 py-5 text-white'>
                <a href="/" className='text-sm'>Home</a>
                <Link to={'/recipePage'} className='text-sm'>Recipes</Link>
                <a href="/favorites" className='text-sm'>Favorites</a>
            </ul>
        </div>
    </header>
  )
}

export default Navbar