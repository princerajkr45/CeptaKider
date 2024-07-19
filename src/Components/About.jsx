import React from 'react'
import userImg from '../assets/user.jpg'
import about1 from '../assets/about-1.jpg'
import about2 from '../assets/about-2.jpg'
import about3 from '../assets/about-3.jpg'

export function About() {


    return (
        <>
            <div className='flex w-full items-center justify-center gap-8 pt-16'>
                <div className='w-1/2  px-10'>
                    <div className=''>
                        <h1 className='text-4xl pb-6 Lobster text-black'>Learn More About Our Work And Our Cultural Activities</h1>
                        <p className='content text-left  pb-4 '>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p class="content text-left ">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>
                    </div>

                    <div className='flex pt-14 items-center justify-around'>
                        <div>
                            <a href='#' className='px-11 py-4 mr-6 rounded-full text-white bg-primary border-none'>Read More</a>
                        </div>
                        <div>
                            <div className='flex gap-4'>
                                <img className='' src={userImg} alt=''
                                    style={{
                                        width: "45px",
                                        height: "45px",
                                        borderRadius: "50%"
                                    }} />
                                <div>
                                    <h6 className='content text-red text-xl'>Jhon Doe</h6>
                                    <small className='content'>CEO & Founder</small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center  w-1/2 '>
                    <div className='relative text-center'>
                        <div>
                            <img src={about1} className='border-[20px] hover:border-red transition ease-linear duration-500'
                                style={{
                                    width: "75%",
                                    height: "auto",
                                    borderRadius: "50%"
                                }}
                            ></img>
                        </div>
                        <div>
                            <img src={about2} className='absolute -left-20 -bottom-40 border-[20px] hover:border-red transition ease-linear'
                                style={{
                                    width: "50%",
                                    borderRadius: "50%"
                                }}
                            ></img>
                        </div>
                        <div>
                            <img src={about3} className='absolute right-12 -bottom-40 border-[20px] hover:border-red transition ease-linear'
                                style={{
                                    width: "50%",
                                    borderRadius: "50%"
                                }}
                            ></img>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

