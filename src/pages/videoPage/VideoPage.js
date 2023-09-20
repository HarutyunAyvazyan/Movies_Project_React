import { useEffect, useState } from "react"
import { API_IMAGE, aboutTheMovie, videoMovie, videoUrl } from "../../constants"
import { useParams } from "react-router-dom"

import React from 'react'
import ReactPlayer from 'react-player'
import DailyMotionPlayer from "react-player/dailymotion"



const VideoPage = () => {

    const [movieUrl, setMovieUrl] = useState([])
    const { id, title } = useParams()
    const [film, setFilm] = useState([])

    useEffect(() => {
        fetch(aboutTheMovie(id))
            .then(result => result.json())
            .then(data => setFilm(data))
    }, [id])

    useEffect(() => {
        fetch(videoMovie(id))
            .then(result => result.json())
            .then(data => setMovieUrl(data))
    }, [id])

    const image = `${API_IMAGE}${film.backdrop_path}`
    const url = movieUrl.results ? ` ${videoUrl}${movieUrl.results[0].key}` : null
    return (

        <div style={{
            margin: "0 auto",
            backgroundColor: "rgb(44, 44, 44)",
            height: "100%",
            paddingTop: "100px",
            paddingBottom: "200px"
        }}>
            <h3 style={{
                display: "flex",
                justifyContent: "center",
                marginBottom:"50px",
                color:"white"
            }}>{film.title}</h3>
            <ReactPlayer style={{
                margin: "0 auto",
                border: "2px solid grey"
            }}
                url={`https://www.dailymotion.com/${url}`}
                width="80%"
                margin="0 auto"
                height="400px"
                playing={true}
                light={<img src={image} alt='Thumbnail' style={{
                    width: "100%",
                    height: "400px"
                }} />}
                volume="0.800"
                speed="1"
                played="0.070"
                loaded="	0.000"
                duration="2:09"
                elapsed="0:09"
                controls={true}
                remaining
            />

        </div>
    )
}

export default VideoPage