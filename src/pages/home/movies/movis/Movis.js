import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

import "../style.css"
import { API_URL } from "../../../../constants"

const Movis = () => {
    const [films, setFilms] = useState([])
    console.log(films);
    useEffect(() => {
        // fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
        //     .then(res => res.json())
        //     .then(data => setFilms(data))
        fetch(API_URL)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div className="container">
            <div className="films">
                <span className="films_title">movis</span>
                <div className="films_background_div">
                    {/* {films && films.map((film, i) => <div key={film.Title} className="films_item">
                        <Link> <img src={film.Poster} className="film_image" /></Link>
                        <Link className="film_btn">{film.Title}</Link>
                    </div>)
                    } */}
                     <div className="arrow_left_div">
                        <FiChevronLeft className="arrow_left" onClick={()=>{
                            console.log(films)
                        }}/>
                    </div>
                    <div className="arrow_right_div">
                        <FiChevronRight className="arrow_right" onClick={()=>{
                            console.log(films)
                        }}/>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Movis