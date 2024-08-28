import React from 'react';
import userImg from '../assets/user.jpg';
import about1 from '../assets/about-1.jpg';
import about2 from '../assets/about-2.jpg';
import about3 from '../assets/about-3.jpg';

export function About() {
    return (
        <>
            <div className='flex flex-col-reverse md:flex-row w-full items-center justify-center gap-8 pt-16 px-4 md:px-10'>
                <div className='w-full md:w-1/2 px-4 md:px-10'>
                    <div className=''>
                        <h1 className='text-2xl md:text-4xl pb-6 Lobster text-black'>
                            Learn More About Our Work And Our Cultural Activities
                        </h1>
                        <p className='content text-left pb-4'>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
                        </p>
                        <p className='content text-left'>
                            Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.
                        </p>
                    </div>

                    <div className='flex flex-col md:flex-row pt-8 md:pt-14 items-center justify-around'>
                        <div className='mb-4 md:mb-0'>
                            <a href='#' className='px-8 py-3 md:px-11 md:py-4 mr-6 rounded-full text-white bg-primary border-none'>
                                Read More
                            </a>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <img src={userImg} alt='User'
                                className='w-12 h-12 md:w-16 md:h-16 rounded-full'
                            />
                            <div>
                                <h6 className='content text-red text-lg md:text-xl'>John Doe</h6>
                                <small className='content'>CEO & Founder</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center w-full md:w-1/2'>
                    <div className='relative text-center'>
                        <div>
                            <img src={about1} className='border-[15px] md:border-[20px] hover:border-red transition ease-linear duration-500'
                                style={{
                                    width: "85%",
                                    height: "auto",
                                    borderRadius: "50%"
                                }}
                            />
                        </div>
                        <div>
                            <img src={about2} className='absolute -left-10 md:-left-20 -bottom-20 md:-bottom-40 border-[15px] md:border-[20px] hover:border-red transition ease-linear'
                                style={{
                                    width: "55%",
                                    borderRadius: "50%"
                                }}
                            />
                        </div>
                        <div>
                            <img src={about3} className='absolute right-6 md:right-12 -bottom-20 md:-bottom-40 border-[15px] md:border-[20px] hover:border-red transition ease-linear'
                                style={{
                                    width: "55%",
                                    borderRadius: "50%"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
