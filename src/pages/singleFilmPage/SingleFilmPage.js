// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { API_IMAGE } from "../../constants"
// import "./style.css"



// const SingleFilmPage = ({ films }) => {
//     const { index } = useParams()
//     // console.log(films.results[index])
//     return (
//         <div className="container">
//             <div className="image_opacity">
//                 <img src={`${API_IMAGE}${films.results[index].backdrop_path}`} className="singleFilm_back" />
//                 <div className="singleFilmMain">
//                     <div className="singleFilmImage_div">
//                         <img src={`${API_IMAGE}${films.results[index].poster_path}`} className="singleFilm_image" />
//                     </div>
//                     <div>
//                         <h1 className="singleFilm_title">{films.results[index].title}</h1>
//                         <p  className="singleFilm_date">Release Date:{films.results[index].release_date}</p>
//                         <p className="singleFilm_description">{films.results[index].overview}</p>
//                         <button>WATCH NOW</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default SingleFilmPage


import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_IMAGE, API_URL, aboutTheMovie } from "../../constants"
import "./style.css"



const SingleFilmPage = () => {
    const { id } = useParams();

    const [film, setFilm] = useState({});

    useEffect(() => {
      fetch(aboutTheMovie(id))
        .then(res => res.json())
        .then(data => setFilm(data))
    }, []);

    console.log(film)
    console.log(film, '>>', id);
    return (
        <div className="container">
            <div className="image_opacity" style={{backgroundImage: `url(${API_IMAGE}${film.backdrop_path})`}}>
                 {/* <img src={`${API_IMAGE}${film.backdrop_path}`} className="singleFilm_back" />  */}
                 <div className="singleFilmMain" >
                    <div className="singleFilmImage_div">
                        <img src={`${API_IMAGE}${film.poster_path}`} className="singleFilm_image" />
                    </div>
                    <div>
                        <h1 className="singleFilm_title">{film.title}</h1>
                        <p  className="singleFilm_date">Release Date:{film.release_date}</p>
                        <p className="singleFilm_description">{film.overview}</p>
                        <button>WATCH NOW</button>
                    </div>
                </div> 
            </div>
        </div>
    )
}


export default SingleFilmPage