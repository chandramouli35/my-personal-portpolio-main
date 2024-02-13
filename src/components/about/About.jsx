import React from 'react';
import "./about.css";
import resume from "../../assets/Chandra_Mouli_Resume.pdf"

const About = () => {
  
    const handleDownload = () => {  
      const link = document.createElement('a');
      link.href = resume;
      link.download = 'https://drive.google.com/file/d/158MC8PZG3VqVlBKGLjQRsofDYeSMHh48/view?usp=sharing.pdf';
      link.click();
    };
  return (
    <section className="about container section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container grid">
        <img src="https://res.cloudinary.com/dgonqoet4/image/upload/v1705287397/IMG-20240110-WA0004_rlm3gu.jpg" alt="" className="about-img" />
        <div className="about-data grid">
          <div className="about-info">
            <p className="about-description"> I'm Chandra Mouli, a MERN Full Stack Developer from Anantapur, Andhra Pradesh, India. With a strong foundation in website design and customization, I excel in HTML, CSS, BOOTSTRAP, JAVASCRIPT, PYTHON, SQLITE, NODE.JS AND REACT.JS . As a fresher, I'm eager to contribute my skills and enthusiasm to innovative web development projects.</p>
            <a href="" className="btn" onClick={handleDownload}>Download CV</a>
          </div>
          <div className="about-skills grid">
            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">HTML,CSS </h3>
                <span className="skills-number ">90%</span>
                
              </div>
              <div className="skills-bar"> 
                <span className="skills-percentage html-css-design"></span>

              </div>
            </div>
          </div>
          <div className="about-skills grid">
            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">BOOTSTRAP</h3>
                <span className="skills-number" >90%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage bootstrap-design"></span>

              </div>
            </div>
          </div>
           <div className="about-skills grid">
            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">JAVASCRIPT</h3>
                <span className="skills-number">90%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage  js-design"></span>

              </div>
            </div>
          </div> 
          <div className="about-skills grid">
            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">REACT JS</h3>
                <span className="skills-number">90%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage  react-design"></span>

              </div>
            </div>
          </div> 
          <div className="about-skills grid">
            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">NODE JS</h3>
                <span className="skills-number">90%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage node-design"></span>

              </div>
            </div>
          </div>
          <div className="about-skills grid">
            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">PYTHON</h3>
                <span className="skills-number">90%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage python-design"></span>

              </div>
            </div>
          </div>
          <div className="about-skills grid">
            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">SQLITE</h3>
                <span className="skills-number">90%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage sqlite-design"></span>

              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About
