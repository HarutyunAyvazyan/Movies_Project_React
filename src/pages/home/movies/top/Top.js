
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../style.css"

const Top = () => {
    const [films, setFilms] = useState([])
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
            .then(res => res.json())
            .then(data => setFilms(data))
    }, [])

    return (
        <div className="container">
            <div className="films">
            <span className="films_title">top in 2022</span>

                <div className="films_background_div">
                    {films && films.map((film, i) => <div key={film.Title} className="films_item">
                        <Link> <img src={film.Poster} className="film_image" /></Link>
                        <Link className="film_btn">{film.Title}</Link>

                    </div>)
                    }
                </div>

            </div>
        </div>

    )
}

export default Top