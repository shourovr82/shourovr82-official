import { transparent } from 'daisyui/src/colors';
import React from 'react';
import { FiDownload } from 'react-icons/fi'

const Banner = () => {
  return (
    <div className='w-full mx-auto flex  items-center justify-center h-[100vh]'>
      <div className='relative md:flex justify-center flex-col-reverse items-center gap-6'>

        <article className='text-slate-100 text-center text-4xl md:mx-auto  w-full md:w-1/2 mr-28 font-bold '>
          <h1>Hey! I am Shafin.
            I build interactive websites that run across platforms & devices
          </h1>
          <div className='pt-5 flex justify-center'>
            <a href='https://drive.google.com/file/d/1PBGyotEFE3UZRWv7wS-7P313m3bwIwiV/view?usp=sharing'
              className='border flex  items-center gap-2  px-3 py-2 rounded hover:bg-[#0078AA] border-[#444444d5] font-thin text-2xl '
              target="_blank" rel="noreferrer">

              Download Resume             <FiDownload />
            </a>



          </div>
        </article>



        <div className='md:absolute hidden md:block md:bottom-56 md:pl-56  opacity-50'>
          <svg className='absolute' width="400" height="300">< polygon points="400,20 310,220 180,260 133,254" style={{ fill: 'transparent', stroke: 'pink', strokeWidth: 5 }} />
          </svg>
          <svg className='absolute' width="400" height="300">< polygon points="350,20 310,220 180,260 133,254" style={{ fill: 'transparent', stroke: 'pink', strokeWidth: 5 }} />
          </svg>
          <svg className='absolute' width="400" height="300">< polygon points="300,20 310,220 180,260 133,254" style={{ fill: 'transparent', stroke: 'pink', strokeWidth: 5 }} />
          </svg>
          <svg className='absolute' width="400" height="300">< polygon points="250,20 310,220 180,260 133,254" style={{ fill: 'transparent', stroke: 'pink', strokeWidth: 5 }} />
          </svg>

          <svg className='absolute' width="400" height="300">< polygon points="200,20 310,220 180,260 133,254" style={{ fill: 'transparent', stroke: 'pink', strokeWidth: 5 }} />
          </svg>
          <svg className='absolute' width="400" height="300">< polygon points="150,20 310,220 180,260 133,254" style={{ fill: 'transparent', stroke: 'pink', strokeWidth: 5 }} />
          </svg>
          <svg className='absolute' width="400" height="300">< polygon points="100,20 310,220 180,260 133,254" style={{ fill: 'transparent', stroke: 'pink', strokeWidth: 5 }} />
          </svg>
          <svg className='absolute' width="400" height="300">< polygon points="50,20 310,220 180,260 133,254" style={{ fill: transparent, stroke: 'pink', strokeWidth: 5 }} />
          </svg>

        </div>
      </div>

    </div >
  );
};

export default Banner;