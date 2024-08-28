import React from 'react';
import team1 from '../assets/team-1.jpg';
import team2 from '../assets/team-2.jpg';
import team3 from '../assets/team-3.jpg';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Teachers() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: '600px' }}
        >
          <h1 className="mb-3 lobster text-4xl md:text-5xl text-black py-4">Popular Teachers</h1>
          <p className='content pt-2 pb-6 text-base md:text-lg'>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
            dolor duo.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 pb-12">
          {[team1, team2, team3].map((teamImg, index) => (
            <div key={index} className="relative w-full max-w-xs md:max-w-sm">
              <img
                className="w-full h-auto rounded-full"
                src={teamImg}
                alt={`Team ${index + 1}`}
              />
              <div className="absolute bottom-0 right-0 p-4 w-full bg-white rounded-full border-4 hover:border-red transition ease-linear duration-500 flex flex-col items-center">
                <h3 className='text-center lobster text-xl md:text-2xl text-black'>Full Name</h3>
                <p className='text-center content py-2'>Designation</p>
                <div className="flex justify-center gap-2 mt-2">
                  <a className="text-white bg-primary rounded-full p-2 text-lg md:text-xl" href="#">
                    <FaFacebookF />
                  </a>
                  <a className="text-white bg-primary rounded-full p-2 text-lg md:text-xl" href="#">
                    <FaTwitter />
                  </a>
                  <a className="text-white bg-primary rounded-full p-2 text-lg md:text-xl" href="#">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teachers;
