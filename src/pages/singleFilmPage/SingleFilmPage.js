
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_IMAGE, API_URL, aboutTheMovie } from "../../constants"
import "./style.css"
import { AiFillHeart } from "react-icons/ai"
import { BsFillPlayFill } from "react-icons/bs"
import Reviews from "./reviews/Reviews"
import Recomendetion from "./recomendetion/Recomendetion"
import Cards from "../home/cards/Cards"



const SingleFilmPage = ({films}) => {
    const { id } = useParams();

    const [film, setFilm] = useState({});
    const [like, setLike] = useState(false)

    useEffect(() => {
        fetch(aboutTheMovie(id))
            .then(res => res.json())
            .then(data => setFilm(data))
    }, []);

    console.log(film)
    return (
        <>
         <div className="container">
            <div className="image_opacity" style={{ backgroundImage: `url(${API_IMAGE}${film.backdrop_path})` }}>
                <div className="singleFilm_Main" >
                    <div className="singleFilmImage_div">
                        <img src={`${API_IMAGE}${film.poster_path}`} className="singleFilm_image" />
                    </div>
                    <div className="description_film">
                        <h1 className="singleFilm_title">{film.title}</h1>
                        <p className="singleFilm_date">Release Date:{film.release_date}</p>
                        <p className="film_runtime">{film.runtime} min</p>
                        <span className="fim_average">{parseInt(film.vote_average)}   </span>
                        <span>????????????????????/</span>
                        {/* {film && film.genres.map(genre => <p>{genre.name}</p>)} */}
                        <p className="singleFilm_description">{film.overview}</p>
                        <div className="film_like_div">
                            <AiFillHeart className={like ? "heart_like" : "heart_like_background"} onClick={() => setLike(!like)} />
                            <button className="singleFilmPage_btn">
                                    <span className="singleFilmPage_btn_text">WATCH NOW</span>
                                    <BsFillPlayFill className="btn_play_image" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Reviews/>
        <Recomendetion films = {films}/>
<Cards films ={films}/>   
        </div>
          
</>
       
    )
}


export default SingleFilmPage