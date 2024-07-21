import React from 'react'
import appointmentImg from '../assets/appointment.jpg'

function Appointment() {
    return (
        <>

            <section>
                <div className='flex px-8 py-24'>
                    <div className='py-6 w-[60%] bg-[#fff5f3] rounded-l-xl'>
                        <h1 className='lobster text-5xl text-black px-8 py-8'>Make Appointment</h1>
                        <form>
                            <div className='flex flex-wrap gap-8 px-8'>
                                <div className='w-[300px] bg-white boreder rounded-2xl'>
                                    <input className='text-left px-4 py-4 bg-transparent outline-none' type='text' placeholder='Gurdian Name'></input>
                                </div>
                                <div className='w-[300px] bg-white boreder rounded-2xl'>
                                    <input className='text-left px-4 py-4 bg-transparent outline-none' type='text' placeholder='Gurdian Email'></input>
                                </div>
                                <div className='w-[300px] bg-white boreder rounded-2xl'>
                                    <input className='text-left px-4 py-4 bg-transparent outline-none' type='text' placeholder='Child Name'></input>
                                </div>
                                <div className='w-[300px] bg-white boreder rounded-2xl'>
                                    <input className='text-left px-4 py-4 bg-transparent outline-none'  type='text' placeholder='Child Age'></input>
                                </div>
                                <div className=' bg-white boreder rounded-2xl'>
                                    <textarea className='text-left px-4 py-4 bg-transparent outline-none' style={{minHeight:"100px",minWidth:"630px"}} type='text' placeholder='Message'></textarea>
                                </div>
                                
                            </div>
                            <div className='px-8 py-8 '>
                                <button className='py-4 bg-blue-500 rounded-xl text-white text-xl' style={{minWidth:"630px"}}>Submit</button>

                            </div>
                        </form>
                    </div>
                    <div>
                        <img src={appointmentImg} className='w-[100%] rounded-r-xl'></img>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Appointment