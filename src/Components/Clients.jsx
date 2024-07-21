import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import client1 from '../assets/testimonial-1.jpg'
import client2 from '../assets/testimonial-2.jpg'
import client3 from '../assets/testimonial-3.jpg'

function Clients() {
    return (
        <>

            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 600 }}
                    >
                        <h1 className="mb-3 lobster text-5xl text-black py-4">Our Clients Say!</h1>
                        <p className='content'>
                            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
                            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
                            dolor duo.
                        </p>
                    </div>
                    <div
                        className="flex gap-8 px-8"
                        data-wow-delay="0.1s"
                    >
                        <div className="flex flex-col gap-4 bg-[#fff5f3] py-12 rounded-xl">
                            <p className="text-xl content text-left px-12">
                                Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
                                rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd
                                erat eos
                            </p>
                            <div
                                className="flex items-center bg-white ml-12"
                                style={{ borderRadius: "50px 0 0 50px" }}
                            >
                                <img
                                    className="rounded-full"
                                    src={client1}
                                    style={{ width: 90, height: 90 }}
                                />
                                <div className="ps-3">
                                    <h3 className="mb-1 lobster text-2xl text-black">Client Name</h3>
                                    <span className='content'>Profession</span>
                                </div>
                                <FaQuoteRight className='text-primary fa-3x ms-auto'/>                            
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 bg-[#fff5f3] py-12 rounded-xl">
                            <p className="text-xl content text-left px-12">
                                Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
                                rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd
                                erat eos
                            </p>
                            <div
                                className="flex items-center bg-white ml-12"
                                style={{ borderRadius: "50px 0 0 50px" }}
                            >
                                <img
                                    className="rounded-full"
                                    src={client2}
                                    style={{ width: 90, height: 90 }}
                                />
                                <div className="ps-3">
                                    <h3 className="mb-1 lobster text-2xl text-black">Client Name</h3>
                                    <span className='content'>Profession</span>
                                </div>
                                <FaQuoteRight className='text-primary fa-3x ms-auto'/>                            
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 bg-[#fff5f3] py-12 rounded-xl">
                            <p className="text-xl content text-left px-12">
                                Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
                                rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd
                                erat eos
                            </p>
                            <div
                                className="flex items-center bg-white ml-12"
                                style={{ borderRadius: "50px 0 0 50px" }}
                            >
                                <img
                                    className="rounded-full"
                                    src={client3}
                                    style={{ width: 90, height: 90 }}
                                />
                                <div className="ps-3">
                                    <h3 className="mb-1 lobster text-2xl text-black">Client Name</h3>
                                    <span className='content'>Profession</span>
                                </div>
                                <FaQuoteRight className='text-primary fa-3x ms-auto'/>                            
                            </div>
                        </div>
                       
                    </div>
                </div>
                
            </div>


        </>
    )
}

export default Clients