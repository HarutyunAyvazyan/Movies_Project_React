import Company from "./company/Company"
import SocialMediaLinks from "./socialMediaLinks/SocialMediaLinks"
import Sponsors from "./sponsors/Sponsors"
import "../footer/style.css"


const Footer =() => {

    return(
        <footer className="container">
            <div className="footer_container">
            <SocialMediaLinks/>
            <Sponsors/>
            <Company/>
            </div>
        </footer>
    )
}

export default Footer