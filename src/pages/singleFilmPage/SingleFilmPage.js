
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_IMAGE, API_URL, aboutTheMovie, videoMovie, videoUrl } from "../../constants"
import "./style.css"
import { AiFillHeart } from "react-icons/ai"
import { BsFillPlayFill } from "react-icons/bs"
import Reviews from "./reviews/Reviews"
import Recomendetion from "./recomendetion/Recomendetion"
import Cards from "../home/cards/Cards"
import { useSelector } from "react-redux"
import axios from "axios"
import { getMovie, videoFilm } from "../../utils/APIUtils"



const SingleFilmPage = () => {
    const { id } = useParams();

    const [film, setFilm] = useState({});
    const [like, setLike] = useState(false)
    const [movieUrl,setMovieUrl] = useState([])

    
//   console.log(videoFilm(id))

    useEffect(() => {
       const fetchMovie = async () => {
        const result =await getMovie(id)
        setFilm(result.data) 
       }
       fetchMovie()

    }, [id]);

    useEffect(() =>{   
        fetch(videoMovie(id))
        .then(result=>result.json())
        .then(data =>setMovieUrl(data))
    },[id])
    console.log(movieUrl,"vahag")


    

    return (
        <>
         <div className="container">
            <div className="singlePage_div">
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
                        {film.genres !== undefined && film.genres.map(item => <span key={item.id} className="film_genre">{item.name}</span>)}
                        <p className="singleFilm_description">{film.overview}</p>
                        <div className="film_like_div">
                            <AiFillHeart className={like ? "heart_like" : "heart_like_background"} onClick={() => setLike(!like)} />
                            <Link className="singleFilmPage_btn" to={`/movie/${film.id}/${film.title}`} target="aaa">
                                    <span className="singleFilmPage_btn_text">WATCH NOW</span>
                                    <BsFillPlayFill className="btn_play_image" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Reviews/>
        <Recomendetion /> 
            </div>
         
        </div>
          
</>
       
    )
}


export default SingleFilmPage