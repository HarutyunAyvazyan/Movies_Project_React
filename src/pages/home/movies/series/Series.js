import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./style.css"
import { API_IMAGE } from "../../../../constants"
import { useSelector } from "react-redux";
import { scrollUp } from "../../../../utils/utils";




const Series = () => {
    const films = useSelector(state => state.state.data);

    
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 768, min: 480 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1
    }
};
    return films && (
        <>
            <div className="container">

                <Carousel responsive={responsive}>

                   

                        {films && films.map( film =>

                            <div key={film.id} className="films_item">
                                <Link to={`/movie/${film.id}`} onClick={scrollUp}> <img src={`${API_IMAGE}${film.poster_path}`} className="film_image" /></Link>
                                <Link to={`/movie/${film.id}`} className="film_btn"  onClick={scrollUp} >{film.title}</Link>
                            </div>

                        )
                        }

                </Carousel>

            </div>

        </>
    )
}

export default Series


{/* <div className="films">
                    <span className="films_title">series</span>
                    <div className="films_background_div">
                    { films.results && films.results.map((film, i) =>
                             <div key={film.id} className="films_item">
                                 <Link  to={`/movie/${film.id}`}> <img src={`${API_IMAGE}${film.poster_path}`} className="film_image"  /></Link>
                                 <Link  to={`/movie/${film.id}`} className="film_btn" >{film.title}</Link>
                             </div>

                            )
                        }
                       
                        </div>
                       
                </div> */}