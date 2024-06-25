import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusAlt, faChalkboard, faFutbol, faHome } from '@fortawesome/free-solid-svg-icons';

export function Facilities() {


    return (
        <>
            <div className=' flex justify-center max-w-full mb-6' >
                <div className='text-center max-w-xl '>
                    <h1 className='mt-10 mb-3 text-3xl'>School Facilities</h1>
                    <p className=''>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
            </div>
            <div className='flex gap-3 px-20 md:flex-wrap  '>
                <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
                    <div className="flex items-center justify-center w-24 h-24  bg-white rounded-full">
                        <FontAwesomeIcon icon={faBusAlt} className="text-red fa-3x" />
                    </div>
                    <div className="mt-4 flex flex-col items-center justify-center w-[200px] h-[260px] bg-white rounded-full p-4 shadow-md">
                        <h2 className="text-xl text-red font-bold mb-2">School Bus</h2>
                        <p className="text-gray-600 text-center">
                            This is a description of the card. It is centered both vertically and
                            horizontally.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
                    <div className="flex items-center justify-center w-24 h-24  bg-white rounded-full">
                        <FontAwesomeIcon icon={faFutbol} className="text-green fa-3x" />
                    </div>
                    <div className="mt-4 flex flex-col items-center justify-center w-[200px] h-[260px] bg-white rounded-full p-4 shadow-md">
                        <h2 className="text-xl text-green font-bold mb-2">Playground</h2>
                        <p className="text-gray-600 text-center">
                            This is a description of the card. It is centered both vertically and
                            horizontally.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
                    <div className="flex items-center justify-center w-24 h-24  bg-white rounded-full">
                        <FontAwesomeIcon icon={faHome} className="text-yellow-500 fa-3x" />
                    </div>
                    <div className="mt-4 flex flex-col items-center justify-center w-[200px] h-[260px] bg-white rounded-full p-4 shadow-md">
                        <h2 className="text-xl text-yellow-500 font-bold mb-2">Healthy Canteen</h2>
                        <p className="text-gray-600 text-center">
                            This is a description of the card. It is centered both vertically and
                            horizontally.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
                    <div className="flex items-center justify-center w-24 h-24  bg-white rounded-full">
                        <FontAwesomeIcon icon={faChalkboard} className="text-chalk fa-3x" />
                    </div>
                    <div className="mt-4 flex flex-col items-center justify-center w-[200px] h-[260px] bg-white rounded-full p-4 shadow-md">
                        <h2 className="text-xl text-chalk font-bold mb-2">Positive Learning</h2>
                        <p className="text-gray-600 text-center">
                            This is a description of the card. It is centered both vertically and
                            horizontally.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}
