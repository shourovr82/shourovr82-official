import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EveryContexts } from '../../Contexts/AllContexts';
import './Navbar.css'
import NavMenu from './NavMenu';

const Navbar = () => {
  const { navOpen, setNavOpen } = useContext(EveryContexts)
  console.log(navOpen);
  return (
    <div>
      <div className='menu-title '>
        <Link to='/'>
          <h2 className='text-[#cca79a] text-3xl font-extrabold'>SI</h2>
        </Link>
      </div>
      <div className="menu-bars  px-5 py-2 text-white text-3xl" >

        <div className='rounded'
        >
          <label
            className="btn btn-circle swap swap-rotate">
            <input type="checkbox"
              onClick={() => setNavOpen(prev => !prev)} />
            {navOpen ? <svg className=" fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg> : <svg className=" fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>}
          </label>
        </div>
      </div>
      <nav className={`${navOpen ? 'fixed w-full z-10' : 'hidden'} `}>
        {navOpen && <NavMenu></NavMenu>}
      </nav>

    </div>
  );
};

export default Navbar;