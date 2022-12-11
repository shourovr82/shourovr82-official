import React from 'react';
import phut from '../../../Assets/phut.png'
import swift from '../../../Assets/swift-c.png'
import travetor from '../../../Assets/travetor.png'

const Projects = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <p className='text-[#ccd6f6] font-semibold font-mono text-2xl pb-10'>{`<PROJECTS>`}</p>
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10'>
        <div className=' shadow-2xl rounded-md shadow-[#010b1644]'>
          <div class="group rounded-md relative block bg-black">
            <img
              alt="Developer"
              src={phut}
              class="absolute rounded-md inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div class="relative p-8">
              <p class="text-xs font-medium uppercase tracking-widest text-[#cca79a]">
                Resale Products Website
              </p>

              <p class="text-2xl font-semibold text-white">Pirates Hut</p>

              <div class="mt-64">
                <div
                  class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <a href="https://pirates-hut-5b341.web.app/" target='_blank' rel="noreferrer">
                    <button className='text-white  text-2xl border px-10 py-2 rounded-md border-[#0077aa93] hover:bg-[#0077aa70]'>
                      View Live Site
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className=' shadow-2xl rounded-md shadow-[#010b1644]'>
          <div class="group rounded-md relative block bg-black">
            <img
              alt="Developer"
              src={swift}
              class="absolute rounded-md inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div class="relative p-8">
              <p class="text-xs font-medium uppercase tracking-widest text-[#ebc1b1]">
                Machine Learning Courses Website
              </p>

              <p class="text-2xl font-semibold text-white">Swift Camp</p>

              <div class="mt-64">
                <div
                  class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <a href="https://swift-camp-47b64.web.app/" target='_blank' rel="noreferrer">
                    <button className='text-white  text-2xl border px-10 py-2 rounded-md border-[#0077aa93] hover:bg-[#0077aa70]'>
                      View Live Site
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className=' shadow-2xl rounded-md shadow-[#010b1644]'>
          <div class="group rounded-md relative block bg-black">
            <img
              alt="Developer"
              src={travetor}
              class="absolute rounded-md inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div class="relative p-8">
              <p class="text-xs font-medium uppercase tracking-widest text-[#cca79a]">
                Travel Guide Booking Website
              </p>

              <p class="text-2xl font-semibold text-white">Pirates Hut</p>

              <div class="mt-64">
                <div
                  class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <a href="https://swift-camp-47b64.web.app/" target='_blank' rel="noreferrer">
                    <button className='text-white  text-2xl border px-10 py-2 rounded-md border-[#0077aa93] hover:bg-[#0077aa70]'>
                      View Live Site
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>






      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Projects;