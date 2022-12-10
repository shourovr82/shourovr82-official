import React from 'react';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Banner from './Banner';

const Home = () => {
  return (
    <div className='bg-[#0c0c0c] '>
      <Banner></Banner>

      <Hero></Hero>
      <Projects></Projects>


    </div>
  );
};

export default Home;