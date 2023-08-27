import vector from "../../../assets/icons/Vector.png"
import "./style.css"
const Sponsors = () => {
    return (
        <div className="footer_item_sponsors">
            <span className="sponsors_title"><img src={vector} /> sponsors</span>
            <div className="footer_sponsors">
                <p className="sponsors_text">Cisco - Amazon - Google -Azure - LinkedIn </p>
                <p className="sponsors_text">IBM -Facebook -Tesla - Appel -Microsoft</p>
                <p className="sponsors_text">Ofppt - 1337 </p>
            </div>
        </div>
    )
}

export default Sponsors