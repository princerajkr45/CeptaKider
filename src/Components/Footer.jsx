import React from 'react';
import cl1 from '../assets/classes-1.jpg';
import cl2 from '../assets/classes-2.jpg';
import cl3 from '../assets/classes-3.jpg';
import cl4 from '../assets/classes-4.jpg';
import cl5 from '../assets/classes-5.jpg';
import cl6 from '../assets/classes-6.jpg';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

function Footer() {
    return (
        <>
            <div className="flex flex-col bg-dark text-white-50 px-4 md:px-8" data-wow-delay="0.1s">
                <div className="w-full py-10 md:py-20 flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-white text-2xl md:text-3xl lobster mb-4">Get In Touch</h3>
                        <p className="flex items-center gap-2 mb-2 text-base md:text-lg"><FaLocationDot />123 Street, New York, USA</p>
                        <p className="flex items-center gap-2 mb-2 text-base md:text-lg"><IoCall />+012 345 67890</p>
                        <p className="flex items-center gap-2 mb-2 text-base md:text-lg"><CiMail />info@example.com</p>
                        <div className="flex gap-2 md:gap-4 pt-3">
                            <a className="btn border-white bg-transparent text-lg md:text-xl text-white rounded-full hover:bg-red" href=""><FaTwitter /></a>
                            <a className="btn border-white bg-transparent text-lg md:text-xl rounded-full hover:bg-red btn-outline-light btn-social text-white" href=""><FaFacebookF /></a>
                            <a className="btn border-white bg-transparent text-lg md:text-xl text-white rounded-full hover:bg-red" href=""><FaYoutube /></a>
                            <a className="btn border-white bg-transparent text-lg md:text-xl text-white rounded-full hover:bg-red" href=""><FaLinkedin /></a>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 mb-6 md:mb-0">
                        <h3 className="text-white text-2xl md:text-3xl lobster mb-4">Photo Gallery</h3>
                        <div className="flex flex-wrap gap-3">
                            <div className="w-1/6 sm:w-1/4">
                                <img className="w-full" src={cl1} alt="" />
                            </div>
                            <div className="w-1/6 sm:w-1/4">
                                <img className="w-full" src={cl2} alt="" />
                            </div>
                            <div className="w-1/6 sm:w-1/4">
                                <img className="w-full" src={cl3} alt="" />
                            </div>
                            <div className="w-1/6 sm:w-1/4">
                                <img className="w-full" src={cl4} alt="" />
                            </div>
                            <div className="w-1/6 sm:w-1/4">
                                <img className="w-full" src={cl5} alt="" />
                            </div>
                            <div className="w-1/6 sm:w-1/4">
                                <img className="w-full" src={cl6} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3">
                        <h3 className="text-white text-2xl md:text-3xl lobster mb-4">Newsletter</h3>
                        <p className="text-base md:text-lg">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="flex flex-col md:flex-row mx-auto border rounded-xl mt-4">
                            <input className="bg-transparent px-4 py-2 md:px-8 md:py-3 w-full md:w-auto" type="text" placeholder="Your email" />
                            <button type="button" className="bg-primary text-white py-2 px-4 md:py-3 md:px-8 mx-2 my-2 rounded-xl">SignUp</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#1e444f]">
                    <div className="w-full flex flex-col md:flex-row justify-between items-center py-6 md:py-8 px-4 md:px-8">
                        <div className="text-base md:text-lg">
                            &copy; <a className="text-white" href="#">Your Site Name</a>, All Right Reserved. Designed By
                            <a className="text-white" href="https://htmlcodex.com"> Prince Kumar</a>
                        </div>
                        <div className="flex gap-2 md:gap-4 mt-4 md:mt-0">
                            <a href="" className='hover:text-primary font-medium border-r border-[#1e444f] px-2 md:px-4'>Home</a>
                            <a href="" className='hover:text-primary font-medium border-r border-[#1e444f] px-2 md:px-4'>Cookies</a>
                            <a href="" className='hover:text-primary font-medium border-r border-[#1e444f] px-2 md:px-4'>Help</a>
                            <a href="" className='hover:text-primary font-medium px-2 md:px-4'>FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
