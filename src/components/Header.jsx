import React, { useEffect, useState } from 'react';
import reactLogo from '../../public/react.svg'

import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-50 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-2">
      <header className="flex item-center justify-between px-4 py-2 sm:p-0">
        <div className="flex">
          <img className="h-8" src={reactLogo} alt="react logo" />
          <span className="px-2 text-2xl font-base text-gray-700 font-semibold">Summarizer</span>
        </div>
        <div className='flex sm:hidden'>
          <button type="button" 
            onClick={() => setMenuOpen(!menuOpen)}
            className="block text-gray-500 hover:text-gray-800 focus:text-gray-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              { menuOpen 
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              }
            </svg>
          </button>
        </div>
      </header>
      <div className={`px-2 pt-2 pb-4 ${menuOpen ? 'block' : 'hidden'} sm:flex sm:text-lg`}>
        <nav>
          <ul className='sm:flex'>
            <li>
              <NavLink 
                to="edm-scraper" 
                relative="path"
                className={`block px-2 py-1 sm:mr-2 
                  text-gray-700 font-semibold rounded 
                  hover:bg-slate-200`}
              >
                EDM Scraper
              </NavLink>
              </li>
            <li>
              <NavLink 
                to="link-shortener" 
                className={`mt-1 block px-2 py-1 sm:mt-0
                  text-gray-700 font-semibold rounded 
                  hover:bg-slate-200`}
                relative="path"
              >
                Link Shortener
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
    </header>
  )
}

export default Header;