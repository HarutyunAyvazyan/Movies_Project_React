
import { Link } from "react-router-dom"
import { API_IMAGE } from "../../../constants"
import  {scrollUp}  from "../../../utils/utils"
import "./style.css"


const Film = ({ film }) => {
    return (
        film && <div className="film_div">
            <div className="film_div_div">
                <Link to={`/movie/${film.id}${film.title}`} className="singleFilm_link" onClick={scrollUp}>

                    <img src={`${API_IMAGE}${film.poster_path}`} className="singleFilm_image" />
                </Link>
                <p className="singleFilm_title">{window.screen.availWidth <=768 ?film.title.split("").slice(0,16).join(""):
                window.screen.availWidth <=480 ?film.title.split("").slice(0,20).join(""):film.title.split("").slice(0,12).join("")}</p>

            </div>

        </div>
    )

}
export default Film