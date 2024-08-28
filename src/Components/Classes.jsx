import React from 'react';
import PriceCard from '../Components/PriceCard';
import classImg1 from '../assets/classes-1.jpg';
import classImg2 from '../assets/classes-2.jpg';
import classImg3 from '../assets/classes-3.jpg';
import classImg4 from '../assets/classes-4.jpg';
import classImg5 from '../assets/classes-5.jpg';
import classImg6 from '../assets/classes-6.jpg';

function Classes() {
  return (
    <>
      <div className='mt-10 flex justify-center px-4 mb-6'>
        <div className='text-center max-w-full md:max-w-xl'>
          <h1 className='mt-10 mb-3 text-3xl md:text-4xl Lobster text-black'>School Classes</h1>
          <p className='content pt-3 pb-8 text-base md:text-lg'>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-6 px-4'>
        <PriceCard classImg={classImg1} title="Art & Drawing" />
        <PriceCard classImg={classImg2} title="Color Management" />
        <PriceCard classImg={classImg3} title="Athletic & Dance" />
        <PriceCard classImg={classImg4} title="Language & Speaking" />
        <PriceCard classImg={classImg5} title="Religion & History" />
        <PriceCard classImg={classImg6} title="General Knowledge" />
      </div>
    </>
  );
}

export default Classes;
