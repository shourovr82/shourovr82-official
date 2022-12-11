import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Banner from './Banner';

const Home = () => {
  return (
    <div className='bg-[#0a192f] '>
      <Banner></Banner>

      <Hero></Hero>
      <Projects></Projects>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>

    </div>
  );
};

export default Home;