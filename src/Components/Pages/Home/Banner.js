import React from 'react';
import { FiDownload } from 'react-icons/fi'

const Banner = () => {
  return (
    <div className='mx-auto flex  items-center w-full h-[100vh]'>

      <div className='w-11/12 mx-auto px-2'>

        <div>
          <p className='text-[#64ffda]'>Hi ! My Name is</p>
          <h1 className='text-7xl font-semibold text-[#ccd6f6]'>Shafinur Islam.
            <br />
            <span className='text-[#8892b0]'>
              I build things for the web.</span>
          </h1>

        </div>
        <div className='w-full md:w-2/5 mt-3'>
          <p className='text-[#8892b0]'>I’m a Frontend Developer specializing in building (and occasionally designing) exceptional digital Web Apps. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
          <a href='https://drive.google.com/file/d/1PBGyotEFE3UZRWv7wS-7P313m3bwIwiV/view?usp=sharing'
            className='border rounded hover:bg-[#06634d4d] border-[#64ffdb8f] items-center gap-5 justify-center text-[#64ffda] flex md:w-2/4 p-2 mt-3 '
            target="_blank" rel="noreferrer">
            Download Resume             <FiDownload />
          </a>
        </div>




      </div>

    </div >
  );
};

export default Banner;