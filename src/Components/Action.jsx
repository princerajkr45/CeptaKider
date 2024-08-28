import React from 'react';
import callImg from '../assets/call-to-action.jpg';

function Action() {
    return (
        <div>
            <div className='mt-[100px] md:mt-[250px] px-4 md:px-6 py-5'>
                <div className="flex flex-col md:flex-row w-full justify-center rounded-3xl bg-[#fff5f3] overflow-hidden">
                    <div className="w-full md:w-[60%]" data-wow-delay="0.1s" style={{ minHeight: "250px" }}>
                        <img className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-t-none" src={callImg} alt="Call to action" />
                    </div>
                    <div className="w-full md:w-[40%] bg-[#fff5f3] p-8 md:p-12" data-wow-delay="0.5s">
                        <div className="flex flex-col justify-center gap-6 md:gap-9">
                            <h1 className="text-3xl md:text-5xl text-black font-bold lobster">Become A Teacher</h1>
                            <p className="content text-left">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <a className="py-4 md:py-6 text-center rounded-lg text-white bg-primary border-none" href="">
                                Get Started Now<i className="fa fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Action;
