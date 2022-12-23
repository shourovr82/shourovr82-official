import React from 'react';
import { FiDownload } from 'react-icons/fi'

const Banner = () => {
  return (
    <div className='mx-auto flex  items-center w-full h-[100vh]'>

      <div className='w-11/12 mx-auto px-2'>

        <div>
          <p className='text-[#4162f5]'>Hi ! My Name is</p>
          <h1 className='text-7xl font-semibold text-[#ccd6f6]'>Shafinur Islam.
            <br />
            <span className='text-[#8892b0]'>
            </span>
          </h1>

        </div>
        <div className='w-full md:w-2/5 mt-3'>
          <p className='text-[#8892b0]'>I’m a Frontend Developer specializing in building (and occasionally designing) exceptional digital Web Apps. Eager to tackle Web Development/Design Challenges
            to achieve lasting impacts on users with Backend Experience.</p>
          <a href='https://drive.google.com/file/d/1PBGyotEFE3UZRWv7wS-7P313m3bwIwiV/view?usp=sharing'
            className='border rounded hover:bg-[#051146a8] border-[#4162f5] items-center gap-5 justify-center text-[#4162f5] flex md:w-2/4 p-2 mt-3 '
            target="_blank" rel="noreferrer">
            Download Resume             <FiDownload />
          </a>
        </div>




      </div>

    </div >
  );
};

export default Banner;