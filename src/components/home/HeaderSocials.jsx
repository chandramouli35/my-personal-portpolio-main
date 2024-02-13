import React from 'react'


const HeaderSocials = () => {
       
                const emailAddress = 'tarigopulachandramouli3235@gmail.com';
              
                const handleClick = () => {
                  window.location.href = `mailto:${emailAddress}`;
                };
  return (
    <div className='home-socials'>
        <a href="https://www.hackerrank.com/profile/tarigopulachand1" className="home-social-link" target="_blank" rel="noreferrer" >
        <i class="fa-brands fa-hackerrank"></i>
        </a>
        <a href="https://leetcode.com/tarigopulachandramouli1818/" className="home-social-link" target="_blank" rel="noreferrer" >
        <i class="fa-solid fa-l"></i>
        
        </a>
        
        <a href="https://github.com/chandramouli35" className="home-social-link" target="_blank" rel="noreferrer" >
        <i class="icon-social-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mouli-chandra/" className="home-social-link" target="_blank" rel="noreferrer">
        <i class="icon-social-linkedin"></i>
        </a>
       
      
    </div>
  )
}

export default HeaderSocials
