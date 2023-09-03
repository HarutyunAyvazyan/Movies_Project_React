import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./style.css"
import { API_IMAGE } from "../../../../constants"


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Series = ({ films }) => {
    return films && (
        <>
            <div className="container">

                <Carousel responsive={responsive}>

                   

                        { films.results.map((film) =>

                            <div key={film.id} className="films_item">
                                <Link to={`/movie/${film.id}`}> <img src={`${API_IMAGE}${film.poster_path}`} className="film_image" /></Link>
                                <Link to={`/movie/${film.id}`} className="film_btn" >{film.title}</Link>
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