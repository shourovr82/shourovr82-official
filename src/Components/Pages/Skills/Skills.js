import React from 'react';

const Skills = () => {
  return (
    <div className='w-10/12 mx-auto my-10' id='skills'>
      <p className='text-[#ccd6f6] font-semibold font-mono text-2xl pb-2'>{`<MY SKILLS>`}</p>
      <h1 className='text-center text-[#717c99]'>Here are a few technologies I’ve been working with recently:</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 py-10 justify-center skills'>

        <div className='text-center'>
          <div className="radial-progress  text-[#ccd6f6]" style={{ "--value": "88", "--size": "12rem", "--thickness": "2rem" }}>
            <p className='text-center text-[#717c99]'>
              REACT JS <br /> <span>
                88%
              </span>
            </p>
          </div>
        </div>

        <div className='text-center'> <div className="radial-progress text-[#ccd6f6]" style={{ "--value": "65", "--size": "12rem", "--thickness": "2rem" }}>
          <p className='text-center text-[#717c99]'>
            NODE JS  <br /> <span>
              65%
            </span>
          </p>
        </div></div>

        <div className='text-center'>
          <div className="radial-progress text-[#ccd6f6]" style={{ "--value": "75", "--size": "12rem", "--thickness": "2rem" }}>
            <p className='text-center text-[#717c99]'>
              MONGODB <br /> <span>
                70%
              </span>
            </p>
          </div>
        </div>
        <div className='text-center'>
          <div className="radial-progress text-[#ccd6f6]" style={{ "--value": "88", "--size": "12rem", "--thickness": "2rem" }}>
            <p className='text-center text-[#717c99]'>
              JAVASCRIPT <br /> <span>
                80%
              </span>
            </p>
          </div>
        </div>
        <div className='text-center'>
          <div className="radial-progress text-[#ccd6f6]" style={{ "--value": "85", "--size": "12rem", "--thickness": "2rem" }}>
            <p className='text-center text-[#717c99]'>
              FIREBASE <br /> <span>
                85%
              </span>
            </p>
          </div>
        </div>
        <div className='text-center'>
          <div className="radial-progress text-[#ccd6f6]" style={{ "--value": "92", "--size": "12rem", "--thickness": "2rem" }}>
            <p className='text-center text-[#717c99]'>
              HTML & CSS <br /> <span>
                92%
              </span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Skills;