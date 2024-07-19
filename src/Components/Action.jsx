import React from 'react'
import callImg from '../assets/call-to-action.jpg'

function Action() {
    return (
        <div>
            <div className=' mt-[250px] px-6 py-5'>
                <div className="flex w-full justify-center rounded-3xl bg-[#fff5f3]">
                    <div className="w-[80%]" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
                            <img className="rounded-l-3xl w-[100%]" src={callImg}
                                style={{ objectFit: "cover" }}
                            />
                    </div>
                    <div className=" bg-white rounded-r-3xl" data-wow-delay="0.5s">
                        <div className="flex flex-col pt-40  gap-9 p-12">
                            <h1 className="text-5xl text-black font-bold lobster">Become A Teacher</h1>
                            <p className="content text-left">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <a className=" py-6 text-center rounded-lg text-white bg-primary border-none" href="">Get Started Now<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Action