import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export function Header(props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className="flex justify-between items-center z-20 sticky top-0 px-5 py-4 bg-white border-b border-gray-300 md:px-10 md:py-5">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faBookReader} className="w-8 h-8 text-orange-500 md:w-10 md:h-10" />
                    <span className="text-xl font-bold text-orange-500 ml-2 md:text-2xl">Kider</span>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-orange-500 focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="w-6 h-6" />
                </button>

                {/* Navigation */}
                <nav
                    className={`${isMobileMenuOpen ? 'block' : 'hidden'
                        } absolute top-full left-0 w-full bg-white  md:static md:w-auto md:flex md:items-center `}
                >
                    <ul className="flex flex-col items-center md:flex-row md:gap-4 md:space-x-6">
                        <li className="border-b border-gray-300 w-full text-center md:border-none">
                            <a href="/" className="block py-2 text-gray-700 hover:text-orange-500">Home</a>
                        </li>
                        <li className="border-b border-gray-300 w-full text-center md:border-none">
                            <a href="/about" className=" py-2  text-gray-700 hover:text-orange-500">AboutUs</a>
                        </li>
                        <li className="border-b border-gray-300 w-full text-center md:border-none">
                            <a href="/classes" className="block py-2 text-gray-700 hover:text-orange-500">Classes</a>
                        </li>
                        <li className="relative group border-b border-gray-300 w-full text-center md:border-none">
                            <a href="/pages" className="block py-2 text-gray-700 hover:text-orange-500">Pages</a>
                            <ul className="absolute left-0 hidden group-hover:block bg-white border border-gray-300 mt-2 md:mt-0 md:top-full md:transform md:translate-y-2">
                                <li><a href="/page1" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Page1</a></li>
                                <li><a href="/page2" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Page2</a></li>
                            </ul>
                        </li>
                        <li className="border-b border-gray-300 w-full text-center md:border-none">
                            <a href="/contact" className="block py-2 text-gray-700 hover:text-orange-500">ContactUs</a>
                        </li>
                    </ul>
                </nav>

                <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-400">
                    Join Us
                </button>
            </header>
        </>
    );
}
