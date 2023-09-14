import { useState } from "react"
import Card from "./card/Card"
import "./style.css"

const Cards = ({ films }) => {
    
    const [cards, setCards] = useState([{
        id: films.results[0].id,
        title: films.results[0].title,
        image: films.results[0].backdrop_path,
        description: films.results[0].overview
    }, {
        id: films.results[1].id,
        title: films.results[1].title,
        image: films.results[1].backdrop_path,
        description: films.results[1].overview
    },
    {
        id: films.results[2].id,
        title: films.results[2].title,
        image: films.results[2].backdrop_path,
        description: films.results[2].overview

    },])
    return (
        <div className="container">
            <div className="cards_title_div">
                <span className="cards_title">
                    popular films
                </span>
            </div>
            <div className="cards">
                {cards.map((card, i) => {
                    return <div key={i} className="card_item" >
                        <Card card={card} />
                    </div>
                })}
            </div>
        </div>
    )

}

export default Cards