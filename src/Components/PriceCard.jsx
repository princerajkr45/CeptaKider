import React from 'react';
import userImg from '../assets/user.jpg';

function PriceCard(props) {
    return (
        <div className="flex flex-col items-center p-4 md:p-6">
            <div className="relative -top-12 w-[80%] md:w-[300px] h-[300px] md:h-[300px] border-[10px] md:border-[15px] rounded-full z-10">
                <img
                    className="w-full h-full object-cover rounded-full"
                    src={props.classImg}
                    alt={props.title}
                />
            </div>
            <div className="relative mt-[-50px] md:mt-[-80px] flex flex-col w-full md:w-[450px] h-auto bg-[#fff5f3] px-4 md:px-6 py-6 md:py-8 rounded-xl shadow-lg">
                <a className="Lobster text-center text-xl md:text-2xl text-black" href="">
                    {props.title}
                </a>
                <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                    <div className="flex items-center gap-3">
                        <img
                            className="rounded-full"
                            src={userImg}
                            alt="Teacher"
                            style={{ width: 40, height: 40 }}
                        />
                        <div className="text-center md:text-left">
                            <h6 className="text-red font-bold text-sm md:text-base">Jhon Doe</h6>
                            <small className="text-sm md:text-lg">Teacher</small>
                        </div>
                    </div>
                    <span className="text-white px-4 py-2 text-center bg-red rounded-full text-sm md:text-base">
                        $99
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base mt-4">
                    <div>
                        <div className="border-t-[3px] border-primary pt-2">
                            <h6 className="text-primary">Age:</h6>
                            <small>3-5 Years</small>
                        </div>
                    </div>
                    <div>
                        <div className="border-t-[3px] border-primary pt-2">
                            <h6 className="text-success">Time:</h6>
                            <small>9-10 AM</small>
                        </div>
                    </div>
                    <div>
                        <div className="border-t-[3px] border-primary pt-2">
                            <h6 className="text-warning">Capacity:</h6>
                            <small>30 Kids</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceCard;
