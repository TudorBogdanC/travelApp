import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-700 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
                <span className="font-semibold text-xl tracking-tight">Wanderlust</span>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-2 border rounded text-teal-500 border-teal-500 hover:text-white hover:border-white"
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="text-sm lg:flex-grow">
                    <Link to="/"  className="font-semibold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Home
                    </Link>
                    <Link to="/membership"  className="font-semibold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Membership
                    </Link>
                    <Link to="/faq"  className="font-semibold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        FAQ
                    </Link>
                </div>
                <div>
                    <Link to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign in</Link>
                </div>
            </div>
        </nav>
    );
};

export default CustomNavbar;
