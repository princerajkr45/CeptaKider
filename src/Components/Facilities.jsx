import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusAlt, faChalkboard, faFutbol, faHome } from '@fortawesome/free-solid-svg-icons';

export function Facilities() {
    return (
        <>
            <div className='mt-10 flex justify-center max-w-full mb-6'>
                <div className='text-center max-w-xl'>
                    <h1 className='mt-10 mb-3 text-4xl Lobster text-black'>School Facilities</h1>
                    <p className='content pt-3 pb-8'>
                        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
                    </p>
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-8 mb-10 px-4 md:px-16'>
                {/* School Bus */}
                <div className="flex bus flex-col p-4 items-center rounded-full hover-effect transition ease-linear">
                    <div className="relative flex items-center justify-center w-32 h-32 md:w-32 md:h-32 bg-gray-100 rounded-full bus-card">
                        <FontAwesomeIcon icon={faBusAlt} className="fa-2x md:fa-3x" />
                        <span className='bg-gray-100 absolute left-0 bus-card'
                            style={{ width: "15px", height: "30px", borderRadius: "50%", top: "6px" }}></span>
                        <span className='bg-gray-100 absolute right-0 bus-card'
                            style={{ width: "15px", height: "30px", borderRadius: "50%", top: "6px" }}></span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center bg-gray-100 p-6 shadow-md bus-card"
                        style={{ width: "250px", height: "250px", borderRadius: "50%", overflow: "hidden" }}>
                        <h2 className="text-xl md:text-2xl text-red font-bold mb-2 lobster bus-card">School Bus</h2>
                        <p className="text-base md:text-lg content bus-card">
                            Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit
                        </p>
                    </div>
                </div>

                {/* Playground */}
                <div className="flex futbol flex-col p-4 items-center rounded-full hover-effect">
                    <div className="relative flex items-center justify-center w-32 h-32 md:w-32 md:h-32 bg-gray-100 rounded-full futbol-card">
                        <FontAwesomeIcon icon={faFutbol} className="fa-2x md:fa-3x" />
                        <span className='bg-gray-100 absolute left-0 futbol-card'
                            style={{ width: "15px", height: "30px", borderRadius: "50%", top: "6px" }}></span>
                        <span className='bg-gray-100 absolute right-0 futbol-card'
                            style={{ width: "15px", height: "30px", borderRadius: "50%", top: "6px" }}></span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 shadow-md futbol-card"
                        style={{ width: "250px", height: "250px", borderRadius: "50%", overflow: "hidden" }}>
                        <h2 className="text-xl md:text-2xl text-green font-bold mb-2 lobster futbol-card">Playground</h2>
                        <p className="text-base md:text-lg content futbol-card">
                            Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit
                        </p>
                    </div>
                </div>

                {/* Healthy Canteen */}
                <div className="flex home flex-col p-4 items-center rounded-full hover-effect">
                    <div className="relative flex items-center justify-center w-32 h-32 md:w-32 md:h-32 bg-gray-100 rounded-full home-card">
                        <FontAwesomeIcon icon={faHome} className="fa-2x md:fa-3x" />
                        <span className='bg-gray-100 absolute left-0 home-card'
                            style={{ width: "15px", height: "30px", borderRadius: "50%", top: "6px" }}></span>
                        <span className='bg-gray-100 absolute right-0 home-card'
                            style={{ width: "15px", height: "30px", borderRadius: "50%", top: "6px" }}></span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 shadow-md home-card"
                        style={{ width: "250px", height: "250px", borderRadius: "50%", overflow: "hidden" }}>
                        <h2 className="text-xl md:text-2xl text-yellow-500 font-bold mb-2 lobster home-card">Healthy Canteen</h2>
                        <p className="text-base md:text-lg content home-card">
                            Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit
                        </p>
                    </div>
                </div>

                {/* Positive Learning */}
                <div className="flex board flex-col p-4 items-center rounded-full hover-effect">
                    <div className="relative flex items-center justify-center w-20 h-20 md:w-32 md:h-32 bg-gray-100 rounded-full board-card">
                        <FontAwesomeIcon icon={faChalkboard} className="fa-2x md:fa-3x" />
                        <span className='bg-gray-100 absolute left-0 board-card'
                            style={{ width: "15px", height: "30px", borderRadius: "50%", top: "6px" }}></span>
                        <span className='bg-gray-100 absolute right-0 board-card'
                            style={{ width: "15px", height: "30px", borderRadius: "50%", top: "6px" }}></span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 shadow-md board-card"
                        style={{ width: "250px", height: "250px", borderRadius: "50%", overflow: "hidden" }}>
                        <h2 className="text-xl md:text-2xl text-chalk font-bold mb-2 lobster board-card">Positive Learning</h2>
                        <p className="text-base md:text-lg content board-card">
                            Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
