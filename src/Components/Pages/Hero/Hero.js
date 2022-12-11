import React from 'react';

const Hero = () => {
  return (
    <div className=' w-5/6 mx-auto'>
      <div>
        <div className='justify-end hidden md:flex'>
          <svg>
            <polyline points="20,20 40,60 70,40 35,180 150,110 300,280"
              style={{ fill: 'none', stroke: '#c602a891', strokeWidth: 5 }} />
          </svg>
        </div>
        <div className='flex justify-center text-center  relative'>

          <svg className='absolute'>
            <polyline
              points="5 20, 20 50, 25 10, 35 30, 45 10,
        55 30, 65 10, 75 30, 80 20 , 95 20 "
              style={{ fill: 'none', stroke: '#c602a891', strokeWidth: 5 }} />
          </svg>
          <div className=' w-full text-white mt-10 ml-2 mx-auto'>
            <h2 className='md:text-6xl text-4xl font-serif font-semibold'><span className='text-end'>“DO WHAT YOU LOVE </span><br />
              LOVE WHAT YOU DO”</h2>
          </div>


        </div>
        <div>
          <svg>
            <polyline points="20,20 40,60 70,40 35,180 150,110 300,280"
              style={{ fill: 'none', stroke: '#c602a891', strokeWidth: 5 }} />
          </svg>

        </div>




      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>

  );
};

export default Hero;