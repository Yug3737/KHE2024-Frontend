import React from 'react';
//import "./hero.css";
import "../App.css"

const HeroSection = ({children}) => {
    return (
        <section className="hero">
            {/* <div className="hero-content"> */}
                {children}
            {/* </div> */}
        </section>
    );
};

export default HeroSection;