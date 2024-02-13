import React from 'react';
import "./home.css";
import HeaderSocials from './HeaderSocials';
import Scrolldown from './Scrolldown';
import Shapes from './Shapes';

const FormDisplay = ({ formData }) => {

 
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src="https://res.cloudinary.com/dgonqoet4/image/upload/v1705287397/IMG-20240110-WA0004_rlm3gu.jpg" alt="" className="home-img" />



        <h1 className="home-name" name="username">Chandra Mouli Tarigopula </h1>


        <span className="home-education">I'm MERN Full Stack Developer Trainee.
        </span><br></br>
        <span className="home-education">tarigopulachandramouli3235@gmail.com
        </span>

        

        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire Me
        </a>
        <Scrolldown />
      </div>
      <Shapes />
    </section>


  )
}
export default FormDisplay;

