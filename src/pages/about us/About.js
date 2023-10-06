import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { API_IMAGE } from '../../constants';
import "./style.css"


const About = () => {

  
  const films = useSelector(data => data.state.data)
  const randomImageNumber = parseInt(Math.random()*films.length)
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='container_about'>
{ films.length &&
    <div  className='about' style={{backgroundImage:`url(${API_IMAGE}${films[randomImageNumber].backdrop_path})`}}>
    <h1 className='about_title'>About</h1>
  </div>}
  <div className='about_description'>
    <div className='about_description_text' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
      <h3 className="about_description_title">Welcome to our <span className='logo'>ShowHub</span></h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
           specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
             the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
             and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.</p>
    </div>
    {films.length &&
  <img src={`${API_IMAGE}${films[randomImageNumber].backdrop_path}`}
   className='about_description_image'
   data-aos="flip-left"
   data-aos-easing="ease-out-cubic"
   data-aos-duration="1000"/>
    }
  </div>
    </div>
   
  )

}

export default About;