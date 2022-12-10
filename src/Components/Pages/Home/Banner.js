import { transparent } from 'daisyui/src/colors';
import React from 'react';

const Banner = () => {
  return (
    <div className='w-full mx-auto flex items-center justify-center h-[100vh]'>
      <div className='relative flex justify-center items-center gap-6'>

        <article className='text-slate-100 text-4xl w-1/2 mr-28 font-bold '>
          <h1>Hey! I am Shafin.
            I build interactive websites that run across platforms & devices
          </h1>
          <div className='pt-5'>
            <a href='https://drive.google.com/file/d/1PBGyotEFE3UZRWv7wS-7P313m3bwIwiV/view?usp=sharing' target="_blank" rel="noreferrer">

              <button className='border hover:bg-slate-500 border-[#4444446c] font-thin w-1/2 py-3'>
                Download Resume
              </button>
            </a>


          </div>
        </article>



        <div className='absolute bottom-56 pl-56  opacity-50'>
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