import React from 'react'

import userImg from '../assets/user.jpg'

function PriceCard(props) {
    return (
        <>

            <div className="" data-wow-delay="0.1s">
                <div className="flex flex-col items-center pt-6 px-3">
                    <div className="w-[300px] h-[300px] border-[15px] rounded-full z-10">
                        <img
                            className="rounded-full"
                            src={props.classImg}
                            alt=""
                        />
                    </div>
                    <div className="-mt-8 flex flex-col w-[450px] h-[280px] bg-[#fff5f3] px-4 rounded-xl">
                        <a className="Lobster text-center text-2xl text-black pt-16 " href="">
                            {props.title}
                        </a>
                        <div className="flex justify-between pt-6">
                            <div className="flex gap-3">
                                <img
                                    className="rounded-full"
                                    src={userImg}
                                    alt=""
                                    style={{ width: 45, height: 45 }}
                                />
                                <div className="">
                                    <h6 className="text-red font-bold">Jhon Doe</h6>
                                    <small className='text-lg'>Teacher</small>
                                </div>
                            </div>
                            <span className="text-white px-6 py-2 text-center bg-red rounded-3xl" href="">
                                $99
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-xl">
                            <div className=" pt-6">
                                <div className="border-t-[3px] border-primary pt-2">
                                    <h6 className="text-primary">Age:</h6>
                                    <small>3-5 Years</small>
                                </div>
                            </div>
                            <div className="pt-6">
                                <div className="border-t-[3px] border-primary pt-2">
                                    <h6 className="text-success">Time:</h6>
                                    <small>9-10 AM</small>
                                </div>
                            </div>
                            <div className=" pt-6">
                                <div className="border-t-[3px] border-primary pt-2">
                                    <h6 className="text-warning">Capacity:</h6>
                                    <small>30 Kids</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PriceCard