import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./style.css"

const Series = () => {
    const [films, setFilms] = useState([])
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(err => console.log(err, 'Error>>>>>>>>>>>>.'))
    }, [])

    return (
        <>
            <div className="div">
                {/* {films.length && films.map((film, i) => <div key={i} className="film">{film}</div>)} */}
            </div>
            <div className="container">
                <div className="films">
                    <span className="films_title">series</span>

                    <div className="films_background_div">
                        { films.length && films.map((film, i) =>
                            ( <div key={film.Title} className="films_item">
                                 <Link> <img src={film.Poster} className="film_image" /></Link>
                                 <Link className="film_btn">{film.Title}</Link>
                             </div>)
                            )
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Series