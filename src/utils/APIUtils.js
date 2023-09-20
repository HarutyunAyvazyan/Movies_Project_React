import axios from "axios"
import { API_URL, aboutTheMovie, videoMovie } from "../constants";

export const getMovies = async() => {
    const result =await axios.get(API_URL)
    return result;
}


export const getMovie = async (id) => {
    const result = await axios.get(aboutTheMovie(id));
    return result
}


export const videoFilm = async (id) =>{
    const result = await axios.get(videoMovie(id))
    return result
}

