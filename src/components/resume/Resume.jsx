import React from 'react';
import "./resume.css";
import Data from './Data';
import Card from './Card';

const Resume = () => {
  return (
    <section className="resume section"id="resume">
      <h2 className="section-title">Education</h2>
    <div className="resume-container grid">
      <div className="timeline grid">
        {Data.map((val,id ) => {
          if(val.category==="education"){
            return(
              <Card key={id}
               icon={val.icon}
                title={val.title}
                 year={val.year} 
                 desc={val.desc}
                  />
              );

          }
        })}
      </div>
      <div className="timeline grid">
        {Data.map((val,index) => {
          if(val.category==="training"){
            return(
              <Card key={index}
               icon={val.icon}
                title={val.title}
                 year={val.year} 
                 desc={val.desc} />
              )
              

          }
        })}
      </div>
    </div>
    </section>
  )
}

export default Resume;
