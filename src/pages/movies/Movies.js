import Search from "../../components/search/Search";
import { API_IMAGE, API_URL } from "../../constants";
import { Link } from "react-router-dom";
import { RxVideo } from "react-icons/rx"


import "./style.css"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";






const Movies = () => {
    const [inputValue, setInputValue] = useState("")
    const films = useSelector(state => state.state.data);




const filteredFilms = films.filter(film => {
    return film.title.toLowerCase().includes(inputValue.toLowerCase());
});

console.log(filteredFilms, "filterrrrrr");

    return (
        <div className="container">
            <div className="movies_search_div">
                <input onChange={(e) => setInputValue(e.target.value)} className="search_input"  placeholder="Search"/>
            </div>
            <div className="films">
                <div className="films_background_div">
                    {filteredFilms && filteredFilms.map((film) =>
                        <div key={film.id} className="films_item">
                            <div className="films_item_hover">
                                <div className="films_item_hover_icon_div">
                                    <Link to={`/movie/${film.id}`}><RxVideo className="films_item_hover_icon_image" /></Link>
                                </div>
                                <div className="films_item_hover_title">
                                    <h4>{film.title}</h4>
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${API_IMAGE}${film.poster_path})` }} className="film_image">  </div>
                        </div>

                    )
                    }

                </div>

            </div>
        </div>

    )
}

export default Movies;