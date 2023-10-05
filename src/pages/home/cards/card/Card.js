import { Link } from "react-router-dom"
import { API_IMAGE } from "../../../../constants"
import "../style.css"
import {  scrollUp } from "../../../../utils/utils"



const Card = ({ card }) => {
  return (
    <div className="card">
      <Link to={`/movie/${card.id}`}><img src={`${API_IMAGE}${card.backdrop_path}`} className="card_image" onClick={scrollUp} /></Link>
      <div className="card_description">
        <h3 className="card_title">{card.title}</h3>
        <p className="card_text">{`${card.overview.split("").splice(0, 20).join("")}...`}</p>
      </div >
      <Link to={`/movie/${card.id}`} onClick={scrollUp}>
        <button className="card_btn">WATCH ONLINE</button>
      </Link>
    </div>
  )
}

export default Card