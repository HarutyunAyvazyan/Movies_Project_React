
import "./style.css"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useSelector } from "react-redux";
import { API_IMAGE } from "../../../constants";




const TopFilms = () => {

    const films = useSelector(data => data.state.data)

    return (
        <>
            <div className="topFilms">
            <span className="topFilms_title">TOP FILMS</span>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={window.screen.availWidth<=480?2
                        :window.screen.availWidth<=768?3:4}
                    loop={true}
                    speed={700}
                    navigation={true}
                    modules={[Navigation]}
                    className="topFilms_swiper">

                    {films && films.map(film =>
                            <SwiperSlide key={film.id}>

                                <div className="topFilms_image_div">
                                    <img src={`${API_IMAGE}${film.backdrop_path}`} className="topFilms_slide_image" />
                                </div>
                            </SwiperSlide>
                        )}

                </Swiper>



            </div>
        </>
    )
}


export default TopFilms