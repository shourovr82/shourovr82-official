import React from 'react';
import './blogs.css'

const Blogs = () => {
  return (
    <div className='bg-[#0a192f]  h-[100vh]'>
      <div className='w-full '>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-[#64ffda] tracking-widest font-medium title-font mb-1">Coming Soon</h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#64ffda]">Blogs Coming Soon</h1>
            </div>
            <div className=" -m-4">

              {/* blogs sections */}

              <div className="p-4 md:w-4/5 mx-auto ">
                <div className="flex rounded-2xl py-10 h-full bg-gradient-to-r from-[#0994739f] to-transparent blog-card  text-[#444] p-8 flex-col ">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-transparent border text-white flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-white  title-font font-serif font-bold  text-xl "> Coming Soon...  </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-white font-mono">Coming Soon ......</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section >
      </div >

    </div>
  );
};

export default Blogs;