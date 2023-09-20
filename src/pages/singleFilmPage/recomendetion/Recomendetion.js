import Series from "../../home/movies/series/Series"
import "./style.css"


const Recomendetion = () => {
    return (
        <div className="container">
            <div className="recomendetion">
                <div className="recomendetion_title_div">
                <span className="recomendetion_title">RECOMENDETION</span>
                </div>
                <div className="recomendetion_div">
                    <Series />
                </div>
            </div>
        </div>


    )
}


export default Recomendetion