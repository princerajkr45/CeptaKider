import React from 'react';
import appointmentImg from '../assets/appointment.jpg';

function Appointment() {
    return (
        <>
            <section>
                <div className='flex flex-col md:flex-row px-4 md:px-8 py-12 md:py-24'>
                    <div className='w-full md:w-[60%] bg-[#fff5f3] rounded-t-xl md:rounded-l-xl md:rounded-tr-none py-6'>
                        <h1 className='lobster text-3xl md:text-5xl text-black px-4 md:px-8 py-4 md:py-8'>
                            Make Appointment
                        </h1>
                        <form>
                            <div className='flex flex-wrap gap-4 md:gap-8 px-4 md:px-8'>
                                <div className='w-full md:w-[300px] bg-white border rounded-2xl'>
                                    <input
                                        className='text-left px-4 py-4 bg-transparent outline-none w-full'
                                        type='text'
                                        placeholder='Guardian Name'
                                    />
                                </div>
                                <div className='w-full md:w-[300px] bg-white border rounded-2xl'>
                                    <input
                                        className='text-left px-4 py-4 bg-transparent outline-none w-full'
                                        type='text'
                                        placeholder='Guardian Email'
                                    />
                                </div>
                                <div className='w-full md:w-[300px] bg-white border rounded-2xl'>
                                    <input
                                        className='text-left px-4 py-4 bg-transparent outline-none w-full'
                                        type='text'
                                        placeholder='Child Name'
                                    />
                                </div>
                                <div className='w-full md:w-[300px] bg-white border rounded-2xl'>
                                    <input
                                        className='text-left px-4 py-4 bg-transparent outline-none w-full'
                                        type='text'
                                        placeholder='Child Age'
                                    />
                                </div>
                                <div className='w-full bg-white border rounded-2xl'>
                                    <textarea
                                        className='text-left px-4 py-4 bg-transparent outline-none w-full'
                                        style={{ minHeight: '100px' }}
                                        placeholder='Message'
                                    ></textarea>
                                </div>
                            </div>
                            <div className='px-4 md:px-8 py-4 md:py-8'>
                                <button
                                    className='py-4 bg-blue-500 rounded-xl text-white text-xl w-full'
                                    style={{ minWidth: '300px' }}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='w-full md:w-[40%]'>
                        <img
                            src={appointmentImg}
                            className='w-full h-full object-cover rounded-b-xl md:rounded-r-xl md:rounded-bl-none'
                            alt='Appointment'
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Appointment;
