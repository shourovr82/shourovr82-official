import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { FaCode } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProjectDetails = () => {
  const project = useLoaderData();
  console.log(project);
  const { thumbnail, image1, image2, image3, title, clientrepo, serverrepo, siteLink, type
  } = project;


  return (
    <div className=' bg-[#0a192f] py-10'>

      <div className='pt-28  w-5/6  mx-auto '>


        <div className=" rounded-bl-3xl shadow-xl shadow-[#3c928428]  rounded-tr-3xl p-10">
          <img
            alt="Signage"
            src={thumbnail}
            className="h-[600px] rounded-lg  w-full object-contain "
          />
          <div className='md:flex py-10  justify-between items-center'>
            <div className='w-full'>
              <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong className="font-medium text-xl text-[#ccd6f6]">{title}</strong>

                <span className=" sm:block sm:h-px sm:w-8 sm:bg-[#64ffda]"></span>

                <p className="mt-0.5  text-xl sm:mt-0 text-[#64ffda]">{type}</p>
              </div>

            </div>
            <div className='flex md:flex-row flex-col  mt-4 gap-4 w-full justify-center items-center'>
              <a href={siteLink} target='_blank' rel="noreferrer" className=' font-semibold  border border-[#64ffda] gap-3 flex justify-center items-center px-4 md:py-2  py-5 w-full  transition-all hover:translate-x-3 text-center hover:bg-[#06634d4d] rounded hover:text-white text-[#64ffda]'>Live Site <RxOpenInNewWindow />
              </a>
              <a href={clientrepo} target='_blank' rel="noreferrer" className=' font-semibold  border border-[#64ffda] gap-3 flex justify-center items-center px-4 md:py-2  py-5 w-full  transition-all hover:translate-x-3 text-center hover:bg-[#06634d4d] rounded hover:text-white text-[#64ffda]'>Client Repo <FaCode />
              </a>

              <a href={serverrepo} target='_blank' rel="noreferrer" className=' font-semibold  border border-[#64ffda] gap-3 flex justify-center items-center px-4 md:py-2  py-5 w-full  transition-all hover:translate-x-3 text-center hover:bg-[#06634d4d] rounded hover:text-white text-[#64ffda]'>Server Repo <FaServer /></a>

            </div>

          </div>

        </div>

        <br />
        <br />
        <br />
        <br />

      </div>

      <div className='w-11/12 mx-auto'>
        <>
          <h2 className='text-2xl text-[#ccd6f6]'>Screenshots</h2>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>

              <PhotoProvider>
                <PhotoView src={image1}>
                  <img src={image1} alt='' className='h-[300px] object-contain' />
                </PhotoView>
              </PhotoProvider>


            </SwiperSlide>
            <SwiperSlide>


              <PhotoProvider>
                <PhotoView src={image2}>
                  <img src={image2} alt='' className='h-[300px] object-contain' />
                </PhotoView>
              </PhotoProvider>
            </SwiperSlide>
            <SwiperSlide>
              <PhotoProvider>
                <PhotoView src={image3}>
                  <img src={image3} alt='' className='h-[300px] object-contain' />
                </PhotoView>
              </PhotoProvider>
            </SwiperSlide>
          </Swiper>
        </>
      </div>

    </div >
  );
};

export default ProjectDetails;