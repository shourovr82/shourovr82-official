import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch('https://shourovr82-server.vercel.app/projects')
      .then(res => res.json())
      .then(data => {
        setProjectsData(data)
      })
  }, [])


  return (
    <div className='w-11/12 mx-auto' id='projects'>
      <p className='text-[#ccd6f6] font-semibold font-mono text-2xl pb-10'>{`<PROJECTS>`}</p>
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-20'>


        {projectsData && projectsData.map((project, index) =>
          <div className=' shadow-2xl rounded-md shadow-[#010b1644]' key={index}>
            <div className="group rounded-md relative block bg-black">
              <img
                alt="Developer"
                src={project?.thumbnail}
                className="absolute rounded-md inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-8">


                <p className="text-2xl font-semibold mt-5 text-white">{project?.title}</p>

                <div className="mt-64">
                  <div
                    className="translate-y-8 transform opacity-0 flex justify-between transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <a href={project?.siteLink} target='_blank' rel="noreferrer">
                      <button className='text-white   border px-3 py-2 rounded-md border-[#0077aa93] hover:bg-[#06634d4d]'>
                        View Live Site
                      </button>
                    </a>
                    <Link to={`/project/${project?.id}`} >
                      <button className='text-white px-3 border  py-2 rounded-md border-[#0077aa93] hover:bg-[#06634d4d]'>
                        View More Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>)}








      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Projects;