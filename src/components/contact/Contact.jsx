import React ,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
 
 

  export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_udtjeg3', 'template_sf0gqoh', form.current, 'yQ-04eq9vbS4Z71h4')
      .then((result) => { 
          console.log(result.text);
          console.log("message send");
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };
 
  const emailAddress = 'tarigopulachandramouli3235@gmail.com';
              
  const handleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (

    <section className="contact container section" id='contact'>
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact-container grid">
        <div className="contact-info">
          <h3 className="contact-title">Let's talk about everything!</h3>
          <p className="contact-details">Send me an E-Mail. 👋</p>
          <div>
          <a  className="home-social-link" target="_blank"  onClick={handleClick}/>
       <i class="fa fa-envelope" aria-hidden="true" style={{color:"black"}}> </i>    <span className='email'>tarigopulachandramouli3235@gmail.com</span><br></br>
      <a className="icon-phone"  style={{color:"black"}}></a> <span className='number'> 7997214502</span></div>
          </div>
          

          <form  className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="contact-form-group">
              <div className="contact-form-div">
                <input type="text" className="contact-form-input" name="user_name"
                  placeholder=' Name' />
              </div>
              <div className="contact-form-div">
                <input type="email" className="contact-form-input" name="user_email"
                  placeholder=' Email' />
              </div>
              <div className="contact-form-div">
                <input type="text" className="contact-form-input" name="user_subject"
                  placeholder='Subject' />

              </div>
              <div className="contact-form-div  contact-form-area">
                <textarea name="message" id="" cols="30" rows="10" className='contact-form-input' placeholder='write your message'></textarea>
              </div>

              <button className='btn' type="submit">Send Message</button>
            </div>
            
          </form>
        </div>
      
    </section>
  )
}


export default Contact
