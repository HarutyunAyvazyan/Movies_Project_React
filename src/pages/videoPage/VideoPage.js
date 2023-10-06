import { useEffect, useState } from "react"
import { API_IMAGE, aboutTheMovie, videoMovie, videoUrl } from "../../constants"
import { useParams } from "react-router-dom"

import React from 'react'
import ReactPlayer from 'react-player'
import axios from "axios"
import "./style.css"



const VideoPage = () => {

    const [movieKey, setMovieKey] = useState('')
    const { id, title } = useParams()
    const [film, setFilm] = useState([])

    useEffect(() => {
        fetch(aboutTheMovie(id))
            .then(result => result.json())
            .then(data => setFilm(data))
    }, [id])

    useEffect(() => {
        const func = async () => {
            const apiVideo = videoMovie(id);
            const data = await axios.get(apiVideo);
            setMovieKey(data.data.results[2].key);
        }
        func()
    }, [id])

    const image = `${API_IMAGE}${film.backdrop_path}`
    const url = `${videoUrl}${movieKey}`

    return (

        <div className="moviePageVideo">
            <h3 className="movie_title" >{film.title}</h3>

            <ReactPlayer className="videoPlayer"
                // width = {window.innerWidth < 768?"480px":window.innerWidth < 480:"300px"}
                url={`${url}`}
                playing={false}
                light={<img src={image} alt={film.title} className="videoPlayer_image" />}
                volume={0.800}
                speed={1}
                played={0.070}
                loaded={0.000}
                duration={"2:09"}
                elapsed={"0:09"}
                controls={true}
                remaining={'true'}

            />

        </div>
    )

}

export default VideoPage