import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Banner from './Banner';
import './home.css'

const Home = () => {
  return (
    <div className='home-background overflow-hidden' >
      <Banner></Banner>
      <Hero></Hero>

      <Skills></Skills>
      <Projects></Projects>

      <About></About>
      <Contact></Contact>

    </div>
  );
};

export default Home;