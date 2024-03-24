import React from "react"
import Back from "../common/back/Back"
import Faq from "../pricing/Faq"

import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3346.6607450080805!2d-96.75289422065434!3d32.9863513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDU5JzEwLjIiTiA5NsKwNDUnMDAuNSJX!5e0!3m2!1sen!2sus!4v1711251053350!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>Write any suggestion or question that you have for us using the following form</p>
            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>800 W. Campbell Road ECW 41, Richardson, TX 75080-3021</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> engineering@utdallas.edu</p>
                <h4>PHONE:</h4>
                <p>+1-972-883-4989</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10' placeholder='Type a message here...'>
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>            
              <a href="https://www.facebook.com/JonssonSchool"><i className='fab fa-facebook-f icon'></i></a>            
              <a href="https://www.instagram.com/utdallasjonsson"><i className='fab fa-instagram icon'></i></a>            
              <a href="https://www.youtube.com/channel/UCj8O4kKnMfM3yL3f7K8XFhA/videos"><i className='fab fa-youtube icon'></i></a> 
            </span>
          </div>
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Contact
