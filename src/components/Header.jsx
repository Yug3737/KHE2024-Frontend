import React from "react";
import HeroSection from "./hero";

const Header = () => {
  const headerStyle = {
    position: "fixed", // Fixed positioning relative to the viewport
    top: 0, // Align to the top of the viewport
    width: "100%", // Take full width of the viewport
    zIndex: 1000, // Ensure it stays on top of other content
  };
  return (
     <h1 className="head" style={{ textAlign: "center" }}>Prep me a quiz</h1>
  )
}

export default Header;