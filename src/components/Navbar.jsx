




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BgTexture from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#E5E5E5]   w-full">
      <div className=" px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center h-[120px] ">

    <div className="flex-shrink-0 flex items-center -mt-2 ">
      <img className="h-20 w-auto md:h-32 lg:h-40" src={BgTexture} alt="Logo" />    
    </div>

  <div className='bg-white h-[95px] w-full rounded-[25px] rounded-t rounded-r -mt-14 -mr-8 hidden md:flex md:items-center md:space-x-4 ml-20 -mr-8 lg:space-x-8 mt-2'>
    <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-20 ml-4 mt-4">
      <Link to="" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium">Home</Link>
      <Link to="countries" className="text-gray-500 hover:text-purple-600 px-3 py-2 text-sm font-medium">Countries</Link>
      <Link to="courses" className="text-gray-500 hover:text-purple-600 px-3 py-2 text-sm font-medium">Courses</Link>
      <Link to="contact" className="text-gray-500 hover:text-purple-600 px-3 py-2 text-sm font-medium">Contact us</Link>
      <Link to="about" className="text-gray-500 hover:text-purple-600 px-3 py-2 text-sm font-medium">About us</Link>
    </div>
    <div className="hidden md:flex md:items-center md:space-x-4 md:justify-end mt-2">
      <a href="tel:+919207979699" className="flex items-center text-sm font-medium">
        <span className="text-purple-600 ml-80 mr-2">Enquiries:</span>
        <span className="text-gray-500 ">+91 1234567890</span>
      </a>
    </div>
  </div>


    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </div>
  </div>
</div>


      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="" className=" text-gray-500 hover:text-purple-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="countries" className="text-gray-500 hover:bg-gray-50 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Countries</Link>
          <Link to="courses" className="text-gray-500 hover:bg-gray-50 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
          <Link to="contact" className="text-gray-500 hover:bg-gray-50 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Contact us</Link>
          <Link to="about" className="text-gray-500 hover:bg-gray-50 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">About us</Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
          <a href="tel:+919207979699" className="flex items-center text-sm font-medium">
            <span className="text-purple-600 ml-24">Enquiries:</span>
            <span className="text-gray-500 mr-9">+91 1234567890</span>
          </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;