import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxVideo } from "react-icons/rx"
import { API_IMAGE } from "../../constants";
import { scrollUp } from "../../utils/utils";
import Film from "../home/film/Film";

const Series = () => {
  const [inputValue, setInputValue] = useState("")
  const films = useSelector(state => state.state.data);

  const filteredFilms = films.filter(film => {
      return film.title.toLowerCase().includes(inputValue.toLowerCase());

  });
  return (
      <div >
          <div className="movies_search_div">
              <input onChange={(e) => setInputValue(e.target.value)} className="search_input" placeholder="Search" />
          </div>
          <div className="films">
              <div className="films_background_div">
                  {!filteredFilms.length ?
                      <div style={{
                          padding: "50px 0",
                          backgroundColor: "#FFE6DD",
                          marginBottom: "40px"
                      }}>
                          <h3 style={{ color: "#553C33" }}>Information</h3>
                          <p style={{ color: "#553C33" }}>
                              Unfortunately, a search on the site did not produce any results.
                              Try changing or shortening your request.
                          </p>
                      </div> : filteredFilms.reverse().map((film) =>
                        //   <div key={film.id} className="films_item">
                        //       <div className="films_item_hover">
                        //           <div className="films_item_hover_icon_div">
                        //               <Link to={`/movie/${film.id}`} onClick={scrollUp}><RxVideo className="films_item_hover_icon_image" /></Link>
                        //           </div>
                        //           <div className="films_item_hover_title">
                        //               <h4>{film.title}</h4>
                        //           </div>
                        //       </div>
                        //       <div style={{ backgroundImage: `url(${API_IMAGE}${film.poster_path})` }} className="film_image">  </div>
                        //   </div>
                        <Film key={film.id} film={film}/>

                      )
                  }

              </div>

          </div>
      </div>

  )
}

export default Series;