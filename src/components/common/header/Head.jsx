import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>ECSConnect</h1>
            <span>THE ALL IN ONE ENGINEERING HUB</span>
          </div>

          <div className='social'>           
              <a href="https://www.facebook.com/JonssonSchool"><i className='fab fa-facebook-f icon'></i></a>            
              <a href="https://www.instagram.com/utdallasjonsson"><i className='fab fa-instagram icon'></i></a>            
              <a href="https://www.youtube.com/channel/UCj8O4kKnMfM3yL3f7K8XFhA/videos"><i className='fab fa-youtube icon'></i></a> 
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
