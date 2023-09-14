import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./style.css"
import { API_IMAGE } from "../../../../constants"




const Series = ({ films }) => {
    
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 3000, min: 1800 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 1800, min: 768 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 768, min: 480 },
        items: 3
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

                   

                        {films.results && films.results.map( film =>

                            <div key={film.id} className="films_item">
                                <Link to={`/movie/${film.id}`}> <img src={`${API_IMAGE}${film.poster_path}`} className="film_image" /></Link>
                                <Link to={`/movie/${film.id}`}><button  className="film_btn" >{film.title}</button></Link>
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