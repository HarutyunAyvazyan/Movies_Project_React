import { Link } from "react-router-dom"
import vector from "../../../assets/icons/Vector.png"
import "./style.css"

const Company = () => {
    return (
        <div className="footer_item_company">
            <span className="company_title"><img src={vector} /> company</span>
            <div className="company_link">
                <Link to="/signUp" className="company_link_text">Register</Link>
                <Link to="/signIn" className="company_link_text">Login</Link>
            </div>
        </div>
    )
}

export default Company