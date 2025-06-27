import React from "react";
import { useNavigate } from "react-router-dom";


const About = () => {
  const Navigate = useNavigate()
  const handleSubmit = () => {
    Navigate(-1)
  }
  return(
    <> 
    <h2>About Us Page</h2>
    <button onClick={handleSubmit}>Home</button>
    
    </>
    );
    
  };

export default About;
