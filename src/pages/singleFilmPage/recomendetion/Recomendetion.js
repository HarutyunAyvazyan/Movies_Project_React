import Series from "../../home/movies/series/Series"
import "./style.css"


const Recomendetion = ({ films }) => {
    return (
        <div className="container">
            <div className="recomendetion">
                <div className="recomendetion_div">
                    <span className="recomendetion_title">RECOMENDETION</span>
                    <Series films={films} />
                </div>
            </div>
        </div>


    )
}


export default Recomendetion