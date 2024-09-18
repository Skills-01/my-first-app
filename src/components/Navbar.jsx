import React, { useState } from 'react'
// import { Link } from react-router-dom'
import { LuMenu, LuX } from 'react-icons/lu';

const links = [
  {
    Id: 1,
    name: 'Home',
    path: '/',
  },
  {
    Id: 2,
    name: 'About Us',
    path: '/about',
  },
  {
    Id: 3,
    name: 'Contact',
    path: '/contact',
  },
  {
    Id: 4,
    name: 'Blog',
    path: '/blog',
  },
  {
    Id: 5,
    name: 'Books',
    path: '/books',
  }
]

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className='container mx-auto py-[20px]'>
      <div className='flex justify-between items-center'>
        <h1>
          <a href='/' >Jaquar</a>
        </h1>

        <nav>
          {/* DESKTOP MENU */}
          <div className='hidden md:flex'>
            <ul className='flex gap-10 font-bold bg-orange-300'>
              {links.map((item, index) => (
                <li key={index}>
                  <a href={item.path}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE VIEW */}
          <div className='md:hidden'>
            {/* HAMBURGER MENU */}
            <div className=''> 
              <LuMenu 
                className='text-[30px]' 
                onClick={() => setIsNavOpen((prev) => !prev)} 
              />
            </div>

            {/* NAV MENU */}
          <div className={isNavOpen ? 'showMenu' : 'hideMenu'}>
            <div className='absolute top-0 right-0 px-8 py-8'>
              <LuX 
                className='text-[30px]' 
                onClick={() => setIsNavOpen(false)} 
              />
            </div>
            
            {/* NAV LINKS */}
            <div>
              <ul>
                {links.map((item, index) => (
                  <li key={index}>
                    <a href={item.path}>{item.name}</a>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
        </nav>
      </div>
    </div>
  )
}