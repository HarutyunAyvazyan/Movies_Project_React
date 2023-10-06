
import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_IMAGE, API_URL, aboutTheMovie, videoMovie, videoUrl } from "../../constants"
import "./style.css"
import { AiFillHeart } from "react-icons/ai"
import { BsFillPlayFill } from "react-icons/bs"
import Reviews from "./reviews/Reviews"
import Recomendetion from "./recomendetion/Recomendetion"

import { getMovie, videoFilm } from "../../utils/APIUtils"
import ReactPlayer from "react-player"
import axios from "axios"
import { scrollDownVideo } from "../../utils/utils"



const MoviePage = () => {
    const { id } = useParams();
    const d = useRef(null)
    const [film, setFilm] = useState({});
    const [like, setLike] = useState(false)
    const [movieKey, setMovieKey] = useState('')




    useEffect(() => {
        const fetchMovie = async () => {
            const result = await getMovie(id)
            setFilm(result.data)
        }
        fetchMovie()

    }, [id]);


    useEffect(() => {
        const func = async () => {
            const apiVideo = videoMovie(id);
            const data = await axios.get(apiVideo);
            setMovieKey(data.data.results[0].key);
        }
        func()
    }, [id])

   

    const image = `${API_IMAGE}${film.backdrop_path}`
    const url = `${videoUrl}${movieKey}`


    return (
        <>
            <div >
                <div className="moviePage_div">
                    <div className="image_opacity" style={{ backgroundImage: `url(${API_IMAGE}${film.backdrop_path})` }}>
                        <div className="movieFilm_Main" >

                            <div className="movieFilmImage_div">
                                <img src={`${API_IMAGE}${film.poster_path}`} className="movieFilm_image" />
                            </div>
                            <div className="description_film">
                                <h1 className="movieFilm_title">{film.title}</h1>
                                <p className="movieFilm_date">Release Date:{film.release_date}</p>
                                <p className="film_runtime">{film.runtime} min</p>
                                <p className="fim_average">{parseInt(film.vote_average)}   </p>
                                {film.genres !== undefined && film.genres.map(item => <span key={item.id} className="movieFilm_genre">{item.name}</span>)}
                                <p className="movieFilm_description">{film.overview}</p>
                                <div className="film_like_div">
                                    <AiFillHeart className={like ? "heart_like" : "heart_like_background"} onClick={() => setLike(!like)} />
                                    <button className="movieFilmPage_btn" target="aaa" onClick={scrollDownVideo}>
                                        <span className="movieFilmPage_btn_text"  >WATCH NOW</span>
                                        <BsFillPlayFill className="btn_play_image" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="videoPlayer_div">
                        <h2 className="videoPlayer_text">ENJOY WATCHING</h2>
                        <ReactPlayer className="videoPlayer"
                            width={window.screen.availWidth <= 768 ? 400 : window.screen.availWidth < 480 ? 400 : 600}
                            url={url}
                            playing={false}
                            light={<img src={image} alt={film.title} className="videoPlayer_image" />}
                            volume={0.800}
                            speed={1}
                            played={0.070}
                            loaded={0.000}
                            duration={"2:09"}
                            elapsed={"0:09"}
                            controls={true}
                            remaining={'true'} />
                    </div>
                    <Reviews />
                    <Recomendetion />
                </div>

            </div>
        </>

    )
}


export default MoviePage