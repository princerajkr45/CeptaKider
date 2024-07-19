import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBookReader } from '@fortawesome/free-solid-svg-icons';

export function Header(props) {


    return (
        <>
            <header className="flex justify-between items-center z-20 sticky top-0 px-10 py-5 bg-white border-b border-gray-300">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faBookReader} className="w-10 h-10 text-orange-500" />
                    <span className="text-2xl font-bold text-orange-500 ml-2">Kider</span>
                </div>
                <nav className="">
                    <ul className="flex space-x-6">
                        <li><a href="/" className="text-gray-700 hover:text-orange-500">Home</a></li>
                        <li><a href="/about" className="text-gray-700 hover:text-orange-500">About Us</a></li>
                        <li><a href="/classes" className="text-gray-700 hover:text-orange-500">Classes</a></li>
                        <li className="relative group">
                            <a href="/pages" className="text-gray-700 hover:text-orange-500">Pages</a>
                            <ul className="absolute left-0 hidden group-hover:block bg-white border border-gray-300 mt-2">
                                <li><a href="/page1" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Page1</a></li>
                                <li><a href="/page2" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Page2</a></li>
                            </ul>
                        </li>
                        <li><a href="/contact" className="text-gray-700 hover:text-orange-500">Contact Us</a></li>
                    </ul>
                </nav>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-400">
                    Join Us
                </button>
            </header>
        </>
    )
}
