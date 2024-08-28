import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import client1 from '../assets/testimonial-1.jpg';
import client2 from '../assets/testimonial-2.jpg';
import client3 from '../assets/testimonial-3.jpg';

function Clients() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div
                    className="text-center mx-auto mb-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: '600px' }}
                >
                    <h1 className="mb-3 lobster text-3xl md:text-5xl text-black py-4">Our Clients Say!</h1>
                    <p className='content text-base md:text-lg px-4'>
                        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
                        lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
                        dolor duo.
                    </p>
                </div>
                <div
                    className="flex flex-wrap gap-8 justify-center px-4"
                    data-wow-delay="0.1s"
                >
                    {[client1, client2, client3].map((clientImg, index) => (
                        <div key={index} className="flex flex-col gap-4 bg-[#fff5f3] py-8 px-6 rounded-xl w-full max-w-md">
                            <p className="text-lg md:text-xl content text-left">
                                Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
                                rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd
                                erat eos
                            </p>
                            <div
                                className="flex items-center bg-white rounded-xl p-4"
                            >
                                <img
                                    className="rounded-full"
                                    src={clientImg}
                                    style={{ width: 70, height: 70 }}
                                    alt={`Client ${index + 1}`}
                                />
                                <div className="ps-3">
                                    <h3 className="mb-1 lobster text-xl md:text-2xl text-black">Client Name</h3>
                                    <span className='content text-sm md:text-base'>Profession</span>
                                </div>
                                <FaQuoteRight className='text-primary text-2xl md:text-3xl ms-auto' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Clients;
