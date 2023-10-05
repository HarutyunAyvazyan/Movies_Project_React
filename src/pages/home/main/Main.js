import "./style.css"
import imageMain from "../../../assets/images/main.png"
import { Link } from "react-router-dom"
// import { scrollUp } from "../../../utils/utils"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  Autoplay, Pagination, } from 'swiper/modules';
import { useSelector } from "react-redux";
import { API_IMAGE } from "../../../constants";
import { BsFillPlayFill } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu"
import { FcRating } from "react-icons/fc"
import 'swiper/css/pagination';
 import "swiper/css/autoplay"




const Main = () => {

  const films = useSelector(state => state.state.data)
  console.log(films)
  return (
    <div className="container_main" >
      <div className="main_div">
        <Swiper
        className="main_swiper"
        // pagination={{ clickable: true}}
          direction="vertical"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1000}
          modules={[Autoplay,Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {films.slice(0, 7).map(film =>
            <SwiperSlide
            key={film.id}
              style={{ backgroundImage: `url(${API_IMAGE}${film.backdrop_path})` }}
              className="slide_image">
              <div className="slide_description">
                <h1 className="slide_title">{film.title}</h1>
                <div className="slide_film_date">
                  <LuCalendarDays className="calendar_icon" />
                  {film.release_date}
                </div>
                <div className="slide_film_average">
                  < FcRating />
                  {film.vote_average}
                </div>
                <div className="slide_btn_div">
                  <Link className="slide_btn" to={`/movie/${film.id}`}>
                    <span className="singleFilmPage_btn_text"  >WATCH</span>
                    <BsFillPlayFill className="btn_play_image" />
                  </Link>
                </div>
              </div>


            </SwiperSlide>

          )}

        </Swiper>

      </div>


    </div>

  )
}

export default Main