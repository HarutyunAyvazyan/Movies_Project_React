import { BsFillPlayFill } from "react-icons/bs"
import "./style.css"

const count = 0

const Reviews = () => {
    return (
        <div className="container">
            <div className="reviews">
                <div className="reviews_div">
                    <div className="reviews_text_div">
                        <span className="reviews_text">REVIEWS ({count})</span>
                    </div>
                    <input type="text" placeholder="Write your review" className="reviews_input" />
                    <button className="reviews_btn">SEND <BsFillPlayFill className="reviews_btn_image" /></button>
                </div>
            </div>
        </div>
    )
}


export default Reviews