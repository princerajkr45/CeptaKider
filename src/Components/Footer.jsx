import React from 'react'
import cl1 from '../assets/classes-1.jpg'
import cl2 from '../assets/classes-2.jpg'
import cl3 from '../assets/classes-3.jpg'
import cl4 from '../assets/classes-4.jpg'
import cl5 from '../assets/classes-5.jpg'
import cl6 from '../assets/classes-6.jpg'
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";



function Footer() {
    return (
        <>
            <div className="flex flex-col bg-dark text-white-50 px-8" data-wow-delay="0.1s">

                <div className="w-full py-20 flex justify-between">
                    <div className="w-[33%] ">
                        <h3 className="text-white text-3xl lobster mb-4">Get In Touch</h3>
                        <p className="flex items-center gap-2 mb-2 text-lg"><FaLocationDot />123 Street, New York, USA</p>
                        <p className="flex items-center gap-2 mb-2 text-lg"><IoCall />+012 345 67890</p>
                        <p className="flex items-center gap-2 mb-2 text-lg"><CiMail />info@example.com</p>
                        <div className="flex gap-1 pt-3">
                            <a className="btn border-white bg-transparent text-xl text-white rounded-full hover:bg-red" href=""><FaTwitter /></a>
                            <a className="btn border-white bg-transparent text-xl  rounded-full hover:bg-red btn-outline-light btn-social text-white" href=""><FaFacebookF /></a>
                            <a className="btn border-white bg-transparent text-xl text-white rounded-full hover:bg-red" href=""><FaYoutube /></a>
                            <a className="btn border-white  bg-transparent text-xl text-white rounded-full hover:bg-red" href=""><FaLinkedin /></a>
                        </div>
                    </div>

                    <div className="w-[64%]">
                        <h3 className="text-white text-3xl lobster mb-4">Photo Gallery</h3>
                        <div className="flex flex-wrap gap-3">
                            <div className="">
                                <img className="w-[100px]" src={cl1} alt="" />
                            </div>
                            <div className="">
                                <img className="w-[100px]" src={cl2} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="w-[100px]" src={cl3} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="w-[100px]" src={cl4} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="w-[100px]" src={cl5} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="w-[100px]" src={cl6} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[33%]">
                        <h3 className="text-white text-3xl lobster mb-4">Newsletter</h3>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="flex mx-auto border rounded-xl mt-4" >
                            <input className="bg-transparent px-8" type="text" placeholder="Your email" />
                            <button type="button" className="bg-primary text-white py-3 px-4 mx-2 my-2 rounded-xl">SignUp</button>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="border-t border-[#1e444f]">
                        <div className="w-full flex justify-between items-center py-8">
                            <div className="">
                                &copy; <a className="text-white" href="#">Your Site Name</a>, All Right Reserved. Designed By

                                <a className="text-white " href="https://htmlcodex.com"> Prince Kumar</a>
                            </div>
                            <div className="">
                                <div className="flex gap-2 ">
                                    <a href="" className='hover:text-primary font-medium border-r border-[#1e444f] px-4'>Home</a>
                                    <a href="" className='hover:text-primary font-medium border-r border-[#1e444f] px-4'>Cookies</a>
                                    <a href="" className='hover:text-primary font-medium border-r border-[#1e444f] px-4'>Help</a>
                                    <a href="" className='hover:text-primary font-medium  px-4'>FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Footer