import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EveryContexts } from '../../Contexts/AllContexts';
import './Navbar.css'

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

  const backhome = () => {
    document.body.scrollIntoView();
  }

  return (
    <nav className={`${backgroundnav ? 'bg-[#0a192f] md:bg-[#0a192f] ' : ''} w-full z-50 shadow fixed`} >
      <div className="container px-6 py-3  mx-auto">
        <div className="lg:flex lg:items-center  lg:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <Link className="text-xl font-bold text-[#a8a4a4] transition-colors duration-300 transform   hover:text-gray-300" to="/">SHAFIN</Link>
            </div>

            <div className="flex lg:hidden">
              <button
                onClick={() => setNavOpen(prev => !prev)}
                type="button" className=" text-gray-200 hover:text-gray-400 focus:outline-none  focus:text-gray-400" aria-label="toggle menu">
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
            <ul className="flex flex-col  -mx-6 gap-8 lg:flex-row lg:items-center lg:mx-8">


              <li ><Link className='text-2xl block mx-auto md:text-xl font-semibold uppercase px-4 md:py-2 w-11/12 py-5 rounded transition-all hover:translate-x-3 text-center hover:bg-[#06634d4d] hover:text-white text-[#a8a4a4]' onClick={() => {
                setNavOpen(false)
                backhome()
              }} to="/">Home</Link></li>



              <li ><a className='text-2xl block rounded mx-auto md:text-xl font-semibold uppercase z-10 px-4 md:py-2 w-11/12 py-5 transition-all hover:translate-x-3 text-center hover:text-white text-[#a8a4a4] hover:bg-[#06634d4d]' onClick={() => setNavOpen(false)} href="/#about">About</a></li>




              <li ><a className='text-2xl   mx-auto md:text-xl font-semibold uppercase  px-4 md:py-2 w-11/12 py-5  transition-all hover:translate-x-3 text-center hover:bg-[#06634d4d] rounded hover:text-white text-[#a8a4a4] block' onClick={() => setNavOpen(false)} href="/#skills">skills</a></li>

              <li><a className='text-2xl  mx-auto md:text-xl font-semibold uppercase px-4 md:py-2 w-11/12 py-5  transition-all hover:translate-x-3 text-center hover:bg-[#06634d4d] rounded hover:text-white text-[#a8a4a4] block' onClick={() => setNavOpen(false)} href="/#projects">Projects</a></li>

              <li ><Link className='text-2xl block mx-auto md:text-xl font-semibold uppercase px-4 md:py-2 w-11/12 py-5 rounded transition-all hover:translate-x-3 text-center hover:bg-[#06634d4d] hover:text-white text-[#a8a4a4]' onClick={() => setNavOpen(false)} to="/blogs">Blogs</Link></li>

              <li ><a className='text-2xl mx-auto md:text-xl font-semibold uppercase  px-4 md:py-2 w-11/12 py-5 block transition-all hover:translate-x-3 text-center hover:bg-[#06634d4d] rounded hover:text-white text-[#a8a4a4]' onClick={() => setNavOpen(false)} href="/#contact">Contact</a></li>

            </ul>

          </div>
        </div>
      </div >
    </nav >



  );
};

export default Navbar;