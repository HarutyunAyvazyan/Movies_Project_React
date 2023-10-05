import { useSelector } from "react-redux";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';


import { API_IMAGE } from "../../constants";
import "./style.css"
import { useEffect } from "react";

const Contact = () => {


  const films = useSelector(data => data.state.data)
  const randomImageNumber = parseInt(Math.random() * films.length)
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='container_contact'>
      {films.length &&
        <div className='contact' style={{ backgroundImage: `url(${API_IMAGE}${films[randomImageNumber].backdrop_path})` }}>
          <h1 className='contact_title'>Contact</h1>
        </div>}
      <div className='contact_cards'>
        <div className="contact_card" data-aos="zoom-in">
          <AiOutlineMail className="contact_card_icon"/>
          <h4 className="contact_card_title">Email Us</h4>
          <p className="contact_card_text"> lorem ipsum</p>
        </div>
        <div className="contact_card" data-aos="zoom-in">
        <PiPhoneCallDuotone  className="contact_card_icon" />
          <h4 className="contact_card_title">Call Us</h4>
          <p className="contact_card_text">lorem ipsum</p>

        </div>
        <div className="contact_card" data-aos="zoom-in">
          <FaLocationDot  className="contact_card_icon" />
          <h4 className="contact_card_title">Location</h4>
          <p className="contact_card_text">lorem ipsum</p>

        </div>
      </div>
    </div>
  )
}

export default Contact;