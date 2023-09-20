import { Link } from "react-router-dom"
import { API_IMAGE } from "../../../../constants"
import "../style.css"



const Card = ({card}) => {
// console.log(card,"card")
    return (
<div className="card">
    <Link to={`/movie/${card.id}`}><img src={`${API_IMAGE}${card.backdrop_path}`}   className="card_image"/></Link>
    <h3 className="card_title">{card.title}</h3>
    <p>{`${card.overview.split("").splice(0,70).join("")}...`}</p>
    <Link to={`/movie/${card.id}`}><button className="card_btn">WATCH ONLINE</button></Link>
</div>
  )
}

export default Card