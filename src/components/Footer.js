import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="links_container" >
        <h2 className="title">Resources</h2>
        <a href="https://api.nasa.gov/" target="_blank" rel="noreferrer">NASA API</a>
      </div>
      <div className="links_container" >
        <h2 className="title">Developer Links</h2>
        <a href="https://robert-petersen.vercel.app/" target="_blank" rel="noreferrer">Website</a>
        <a href="https://www.linkedin.com/in/robert-petersen808/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://resume.io/r/FFjx1r7fT" target="_blank" rel="noreferrer">Resume</a>
      </div>
    </footer>
  );
}

export default Footer;
