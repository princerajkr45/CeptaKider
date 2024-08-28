import React from 'react';
import CarouselImg1 from '../assets/carousel-1.jpg';

export function Home() {
    return (
        <>
            <div className="carousel w-full relative h-[70vh] md:h-[80vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={CarouselImg1}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Text Content */}
                <div className='absolute text-white top-1/2 left-4 md:left-16 transform -translate-y-1/2'>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Make A Brighter Future For Your Child
                    </h1>
                    <p className='text-sm md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-10'>
                        Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                    </p>
                    <a href="" className="px-6 py-2 md:px-8 md:py-3 lg:px-11 lg:py-4 mr-4 md:mr-6 rounded-full text-white bg-primary">
                        Learn More
                    </a>
                    <a href="" className="px-6 py-2 md:px-8 md:py-3 lg:px-12 lg:py-4 rounded-full text-white bg-dark">
                        Our Classes
                    </a>
                </div>
            </div>
        </>
    );
}
