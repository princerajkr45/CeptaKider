import React from 'react'
import team1 from '../assets/team-1.jpg'
import team2 from '../assets/team-2.jpg'
import team3 from '../assets/team-3.jpg'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'


function Teachers() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-3 lobster text-5xl text-black py-4">Popular Teachers</h1>
            <p className='content pt-2 pb-6'>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
              lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
              dolor duo.
            </p>
          </div>
          <div className="flex justify-center gap-12 pb-12">
            <div className="" data-wow-delay="0.1s">
              <div className="relative">
                <img
                  className="rounded-[60%]"
                  src={team1}
                  alt=""
                />
                <div className="absolute bottom-0 -right-8 w-[250px] h-[250px] bg-white rounded-full border-[20px] hover:border-red transition ease-linear duration-500">
                  <h3 className='text-center lobster text-2xl text-black pt-12'>Full Name</h3>
                  <p className='text-center content py-2'>Designation</p>
                  <div className="flex justify-center">
                    <a className="btn btn-square text-white bg-primary mx-1 rounded-full text-2xl outline-none border-none" href="">
                     <FaFacebookF />
                    </a>
                    <a className="btn btn-square  text-white bg-primary mx-1 rounded-full text-2xl outline-none border-none" href="">
                     <FaTwitter />
                    </a>
                    <a className="btn btn-square  text-white bg-primary mx-1 rounded-full text-2xl outline-none border-none" href="">
                     <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="" data-wow-delay="0.1s">
              <div className="relative">
                <img
                  className="rounded-[60%]"
                  src={team2}
                  alt=""
                />
                <div className="absolute bottom-0 -right-8 w-[250px] h-[250px] bg-white rounded-full border-[20px] hover:border-red transition ease-linear duration-500">
                  <h3 className='text-center lobster text-2xl text-black pt-12'>Full Name</h3>
                  <p className='text-center content py-2'>Designation</p>
                  <div className="flex justify-center">
                    <a className="btn btn-square text-white bg-primary mx-1 rounded-full text-2xl outline-none border-none" href="">
                     <FaFacebookF />
                    </a>
                    <a className="btn btn-square  text-white bg-primary mx-1 rounded-full text-2xl outline-none border-none" href="">
                     <FaTwitter />
                    </a>
                    <a className="btn btn-square  text-white bg-primary mx-1 rounded-full text-2xl outline-none border-none" href="">
                     <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="" data-wow-delay="0.1s">
              <div className="relative">
                <img
                  className="rounded-[60%]"
                  src={team3}
                  alt=""
                />
                <div className="absolute bottom-0 -right-8 w-[250px] h-[250px] bg-white rounded-full border-[20px] hover:border-red transition ease-linear duration-500">
                  <h3 className='text-center lobster text-2xl text-black pt-12'>Full Name</h3>
                  <p className='text-center content py-2'>Designation</p>
                  <div className="flex justify-center">
                    <a className="btn btn-square text-white bg-primary mx-1 rounded-full text-2xl outline-none border-none" href="">
                     <FaFacebookF />
                    </a>
                    <a className="btn btn-square  text-white bg-primary mx-1 rounded-full text-2xl outline-none border-none" href="">
                     <FaTwitter />
                    </a>
                    <a className="btn btn-square  text-white bg-primary mx-1 rounded-full text-2xl outline-none border-none" href="">
                     <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>

    
    </>
  )
}

export default Teachers