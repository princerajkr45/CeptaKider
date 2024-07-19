import React from 'react'
import CarouselImg1 from '../assets/carousel-1.jpg'

 export function Home() {


    return (
        <>
            <div className="carousel w-full relative h-[80vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={CarouselImg1}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div className='absolute text-white top-[250px] left-4'>
                    <h1 className="display-2  text-6xl lobster font-bold mb-4">Make A Brighter Future For Your Child</h1>
                    <p className='text-gray text-xl mb-10'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                    <a href="" className="px-11 py-4 mr-6 rounded-full text-white bg-primary border-none">Learn More</a>
                    <a href="" className="px-12 py-4 rounded-full text-white bg-dark" >Our Classes</a>
                </div>

            </div>
           
        </>
    )
}


