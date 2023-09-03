import Search from "../../components/search/Search";
import { API_IMAGE, API_URL } from "../../constants";
import { Link } from "react-router-dom"


import "./style.css"
import { useEffect, useState } from "react";

const Movies = ({films}) => {
    // const [films, setFilms] = useState([]);

    // useEffect(() => {
    //   fetch(API_URL)
    //     .then(res => res.json())
    //     .then(data => setFilms(data))
    // }, []);

    console.log(films.results, ">>>>>>>>")
    return (
        <div className="container">
            <div className="movies_search_div">
                <Search className="link" />
            </div>
            <div className="films">
                <div className="films_background_div">
                    {films.results && films.results.map((film) =>
                        <div key={film.id} className="films_item">
                            <Link  to={`/movie/${film.id}`}> <img src={`${API_IMAGE}${film.poster_path}`} className="film_image" /></Link>
                            <Link  to={`/movie/${film.id}`} className="film_btn">{film.title}</Link>
                        </div>

                    )
                    }

                </div>

            </div>
        </div>

    )
}

export default Movies;