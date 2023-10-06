import { useSelector } from "react-redux"
import Film from "../film/Film"
import "./style.css"

const PopularFilms = () => {
    const films =useSelector(data => data.state.data)

    return (
    <div className="popularFilms">
        <span className="popularFilms_title">POPULAR FILMS</span>
        <div className="popularFilms_films">
            {films && films.slice(0,12).map(film =>
                <Film key={film.id} film={film}/>
                )}
        </div>
        <Film/>
    </div>
    )
}

export default PopularFilms