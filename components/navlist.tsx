// ChatGPT generated and slightly modified

'use client';

import Link from 'next/link';
import React from 'react';

const NavList = () => {
  return (
    <nav className="text-[#ffffff] px-6 py-3 flex gap-6 font-medium z-10">
      <div className="relative group">
        <button className="px-4 py-2 rounded-md hover:text-shadow-2xs text-sm transition duration-300">
          Profile
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#fff]"></span>
        </button>

        <div className="text-sm absolute left-0 mt-2 w-64 bg-[#152d51] text-[#f0f1f1] rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 transition-all duration-300">
          <Link href={ '/profile' }>
            <div className="p-4 hover:bg-[#284d85] ease-in-out duration-300 hover:rounded-tl-lg hover:rounded-tr-lg cursor-pointer">
              <h4 className="">Company Profile</h4>
              <p className="text-gray-200 text-sm">Some sentence</p>
            </div>
          </Link>

          <Link href={ '/team' }>
            <div className="p-4 hover:bg-[#284d85] ease-in-out duration-300 hover:rounded-bl-lg hover:rounded-br-lg cursor-pointer">
              <h4 className="">Our Team</h4>
              <p className="text-gray-200 text-sm">Some sentence</p>
            </div>
          </Link>
        </div>
      </div>

      <button className="px-4 py-2 rounded-md hover:text-shadow-2xs text-sm group transition duration-300">
        <Link href={ '/projects' }>
          Projects
        </Link>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#fff]"></span>
      </button>
      
      <button className="px-4 py-2 rounded-md hover:text-shadow-2xs text-sm group transition duration-300">
        <Link href={ '/services' }>
          Services
        </Link>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#fff]"></span>
      </button>
    </nav>
  );
};

export default NavList;
