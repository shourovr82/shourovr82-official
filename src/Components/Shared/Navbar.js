import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EveryContexts } from '../../Contexts/AllContexts';
import './Navbar.css'
import NavMenu from './NavMenu';

const Navbar = () => {
  const { navOpen, setNavOpen } = useContext(EveryContexts)
  const [backgroundnav, setBackgroundNav] = useState(false);


  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setBackgroundNav(true);
    }
    else {
      setBackgroundNav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);


  return (
    <nav className={`${backgroundnav ? 'bg-[#0a192f] md:bg-[#0a192f] ' : 'bg-[#0a192f] '} w-full z-50 shadow fixed`} >
      <div className="container px-6 py-3  mx-auto">
        <div className="lg:flex lg:items-center  lg:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <a className="text-xl font-bold text-[#a8a4a4] transition-colors duration-300 transform   hover:text-gray-300" href="/">SHAFIN</a>
            </div>

            <div className="flex lg:hidden">
              <button
                onClick={() => setNavOpen(prev => !prev)}
                type="button" className="text-gray-500 text-gray-200 hover:text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-600 focus:text-gray-400" aria-label="toggle menu">
                {!navOpen && <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>}

                {
                  navOpen && <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                }

              </button>
            </div>
          </div>

          <div className={`${navOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  bg-[#0a192f] lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
            <ul className="flex flex-col  -mx-6 gap-10 lg:flex-row lg:items-center lg:mx-8">

              <li className='text-2xl rounded mx-auto md:text-xl font-semibold uppercase z-10 px-4 md:py-2 w-11/12 py-5 transition-all hover:translate-x-3 text-center hover:text-white text-[#a8a4a4] hover:bg-[#06634d4d]'><a onClick={() => setNavOpen(false)} href="#about">About</a></li>
              <li className='text-2xl  mx-auto md:text-xl font-semibold uppercase  px-4 md:py-2 w-11/12 py-5  transition-all hover:translate-x-3 text-center hover:bg-[#06634d4d] rounded hover:text-white text-[#a8a4a4]' ><a onClick={() => setNavOpen(false)} href="#skills">skills</a></li>
              <li className='text-2xl  mx-auto md:text-xl font-semibold uppercase px-4 md:py-2 w-11/12 py-5  transition-all hover:translate-x-3 text-center hover:bg-[#06634d4d] rounded hover:text-white text-[#a8a4a4]'><a onClick={() => setNavOpen(false)} href="#projects">Projects</a></li>
              <li className='text-2xl mx-auto md:text-xl font-semibold uppercase px-4 md:py-2 w-11/12 py-5 rounded transition-all hover:translate-x-3 text-center hover:bg-[#06634d4d] hover:text-white text-[#a8a4a4]'><a onClick={() => setNavOpen(false)} href="#home">Home</a></li>
              <li className='text-2xl mx-auto md:text-xl font-semibold uppercase  px-4 md:py-2 w-11/12 py-5  transition-all hover:translate-x-3 text-center hover:bg-[#06634d4d] rounded hover:text-white text-[#a8a4a4]'><a onClick={() => setNavOpen(false)} href="#contact">Contact</a></li>

            </ul>
            {/* 
            <div className="flex items-center mt-4 lg:mt-0">
              <button className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block text-gray-200 hover:text-gray-700 hover:text-gray-400 focus:text-gray-700 focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                </div>

                <h3 className="mx-2 text-gray-700 text-gray-200 lg:hidden">Khatab wedaa</h3>
              </button>
            </div> */}
          </div>
        </div>
      </div >
    </nav >




    // <div>
    //   <div className='menu-title mt-3 '>
    //     <Link to='/'>
    //       <h2 className='text-[#cca79a] text-3xl font-extrabold'>SI</h2>
    //     </Link>
    //   </div>
    //   <div className="menu-bars  md:px-5 md:py-2 text-white text-3xl" >

    //     <div className='rounded'
    //     >
    //       <label
    //         className="btn btn-circle swap swap-rotate">
    //         <input type="checkbox"
    //           onClick={() => setNavOpen(prev => !prev)} />
    //         {navOpen ? <svg className=" fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg> : <svg className=" fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>}
    //       </label>
    //     </div>
    //   </div>
    //   <nav className={`${navOpen ? 'fixed w-full z-10' : 'hidden'} `}>
    //     {navOpen && <NavMenu></NavMenu>}
    //   </nav>

    // </div>
  );
};

export default Navbar;