import "../description/style.css"
import imageMain from "../../../assets/images/main.png"
import { Link } from "react-router-dom"

const Main = () => {
    return (
        <div className="container">
            <div className="main_div">
                <div className="main_text">
                    <h1 className="main_title">ShowHub</h1>
                    <h3 className="main_label">enjoy watching</h3>
                    <p className="main_text_description">
                        Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat. Ut wisi enimad minim
                        veniam, quis nostrud exerci Lorem ipsum dolor
                        sit amet, consectetuer adipiscing elit,sed
                        diam nonummy nibh euismod tincidunt ut laoreet
                        dolor magna aliquam erat volutpat. Ut wisi
                        enimad minim veniam, quis nostrud exerci
                    </p>
                    <div className="btn_div">
                   <Link to={"signUp"}> <button className="main_btn">start now</button></Link> 

                    </div>
                </div>
                <div className="image_div">
                    <img src={imageMain} className="image_main" />
                </div>
               
            </div>

        </div>

    )
}

export default Main