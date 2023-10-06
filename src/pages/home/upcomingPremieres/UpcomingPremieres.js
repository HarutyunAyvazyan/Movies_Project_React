import { useSelector } from "react-redux"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { API_IMAGE } from "../../../constants"
import "./style.css"
import revenger from "../../../assets/images/revenger.jpg"
import { useEffect } from "react";


const UpcomingPremieres = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="upcoming_premieres">
            {/* <span className="upcoming_premieres_title">
                UPCOMING PREMIERES
            </span> */}
            <div className="upcoming_premieres_div">
                <div className="upcoming_premieres_description">
                    <h1 className="upcoming_premieres_description_title">LOREM IPSUM</h1>
                    <p className="upcoming_premieres_description_text">
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's standard
                     dummy text ever since the 1500s, when an unknown printer took a galley
                      of type and scrambled it to make a type specimen book. It has survived not
                       only five centuries, but also the leap into electronic typesetting, remaining 
                       essentially unchanged. It was popularised in the 1960s with the release 
                       of Letraset sheets containing Lorem Ipsum passages, and more recently 
                       with desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum.
                    </p>
                </div>
                <div className="upcoming_premieres_description_image_div"   data-aos="flip-left"
   data-aos-easing="ease-out-cubic"
   data-aos-duration="500">
                    <img src={revenger}  className="upcoming_premieres_description_image"/>
                </div>
            </div>



        </div>
    )
}

export default UpcomingPremieres