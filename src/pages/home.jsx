import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/hero';
import "../App.css" // Import CSS file for styling

const Home = () => {
  return (
    <>
      <Header/>
      <HeroSection>
      {/* Container for the overlay content */}
      {/* <div className="overlay-container"> */}
        {/* Overlay content on top of the hero section */}
        <div className="overlay-content">
          <h4>Practice Quiz based on your slides</h4>
          <p>Please use the drop-down menu to choose the courses and related concepts for the quiz.</p>
          <select id="course-dropdown">
            <option>Select a course ▼</option>
            <option>CS-1</option>
            <option>CS-2</option>
            <option>CS-3</option>
          </select>
        </div>
      {/* </div> */}
        </HeroSection>

    </>
  );
};

export default Home;
