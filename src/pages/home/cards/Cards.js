import { useState } from "react"
import Card from "./card/Card"
import "./style.css"
import { useSelector } from "react-redux";

const Cards = () => {

    const films = useSelector(state => state.state.data);

    const cards = films.slice(4, 7)
    // console.log(cards)


    return (
        <div className="container">
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