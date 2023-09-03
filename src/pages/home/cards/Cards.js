import { useState } from "react"
import Card from "./card/Card"

const Cards = () => {
    const [cards, setCards] = useState([{
        id: Date.now,
        title: "basic",
        main: 1
    }, {
        id: Date.now,
        title: "standard",
        main: 2
    },
    {
        id: Date.now,
        title: "premium",
        main: 3

    },])
    return (
        <div className="container">
            <span className="cards_title">
                principal service
            </span>

                <div className="cards">
                    {cards.map((card, i) => {
                        return <div key={i} className="card_item" >
                            <Card title={card.title} main={card.main} />
                        </div>
                    })}
                </div>
            </div>
    )

}

export default Cards