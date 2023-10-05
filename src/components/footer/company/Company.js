import { Link } from "react-router-dom"
import vector from "../../../assets/icons/Vector.png"
import "./style.css"
import { scrollUp } from "../../../utils/utils"

const Company = () => {
    return (
        <div className="footer_item_company">
            <span className="company_title"><img src={vector} /> company</span>
            <div className="company_link">
                <Link to="/signUp" className="company_link_text" onClick = {scrollUp}><p>Register</p></Link>
                <Link to="/signIn" className="company_link_text" onClick = {scrollUp}><p>Login</p></Link>
            </div>
        </div>
    )
}

export default Company