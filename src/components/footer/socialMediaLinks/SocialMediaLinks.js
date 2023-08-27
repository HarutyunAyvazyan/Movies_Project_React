import { Link } from "react-router-dom"
import fb from "../../../assets/icons/fb.png"
import linkadin from "../../../assets/icons/linkadin.png"
import kat from "../../../assets/icons/kat.png"
import twitter from "../../../assets/icons/twitter.png"
import phone from "../../../assets/icons/phone.png"
import vector from "../../../assets/icons/Vector.png"
import "./style.css"

const SocialMediaLinks = () => {
    return (
        <div className="footer_item_social">
            <span className="social_title"><img src={vector} /> social media links</span>
            <div className="footer_links">

                <div className="social_icons_div">
                    <img src={kat} className="icon"/>
                    <Link to="#" className="social_link_text">  nourddine benyahya</Link>
                </div>

                <div className="social_icons_div">
                    <img src={twitter} className="icon" />
                    <Link to="#" className="social_link_text"> EedinNour</Link>
                </div>

                <div className="social_icons_div">
                    <img src={linkadin} className="icon"/>
                    <Link to="#" className="social_link_text">  nourddine benyahya</Link>
                </div>

                <div className="social_icons_div">
                    <img src={phone} className="icon"/>
                    <Link to="#" className="social_link_text">  +212607-081298</Link>
                </div >
                
                <div className="social_icons_div">
                    <img src={fb} className="icon"/>
                    <Link to="#" className="social_link_text">  nourddine ben</Link>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaLinks