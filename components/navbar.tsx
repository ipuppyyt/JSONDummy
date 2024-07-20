'use client';

import { Spiral as Hamburger } from 'hamburger-react';
import Github from '@/assets/icons/Github';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

  const [isOpen, setOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black backdrop-blur-lg select-none z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" draggable='false' className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-2xl font-bold font-garet-heavy uppercase text-gray-100">JSON Dummy</span>
        </Link>

        <div className='md:hidden flex'>
          <Hamburger color='#fff' size={24} toggled={isOpen} toggle={setOpen} />
        </div>


        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-1 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link href="/" className="block py-2 px-3 text-gray-100 rounded font-garet-bold">Home</Link>
            </li>
            <li>
              <Link href="/docs" className="block py-2 px-3 text-gray-100 rounded font-garet-bold">Docs</Link>
            </li>
            <li>
              <Link href="https://github.com/ipuppyyt/JSONDummy" target='_blank' className="block py-2 px-3 text-gray-100 rounded font-garet-bold">
                <Github width={24} height={24} color='#fff' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;