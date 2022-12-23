import React from 'react';


const About = () => {
  return (

    <div className=' flex items-center mt-10  ' id='about'>
      <div className='w-11/12 md:w-10/12 mx-auto ' >
        <p className='text-[#ccd6f6] font-semibold font-mono text-2xl pb-2'>{`<ABOUT ME>`}</p>

        <div className='md:grid grid-cols-2' >
          <div>
            <div className='text-[#717c99] font-semibold text-lg '>Hello! My name is Shafinur Islam and I enjoy creating Website | Web Apps that live on the internet. My interest in web development started back in 2018.
              <br />
              <br />
              Contact Me  : <br />
              <span> WhatsApp : <span className='text-[#4162f5]'>+8801931016701</span></span>
              <br />
              <span> Gmail : <span className='text-[#4162f5]'>shafinur512@gmail.com</span></span>
              <br />
              <h1 className='flex  gap-2'>Linkedin :
                <a href="https://www.linkedin.com/in/shourovr82/" className='text-[#4162f5] ' target='_blank' rel="noopener noreferrer">Visit
                </a></h1>
              <h1 className='flex  gap-2'>Github :
                <a href="https://github.com/shourovr82" className='text-[#4162f5] ' target='_blank' rel="noopener noreferrer">Visit
                </a></h1>
            </div>
            <br />






          </div>
          <div></div>
        </div>

      </div >

    </div>

  );
};

export default About;