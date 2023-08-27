
import { Link } from "react-router-dom"

import Input from "../../components/costumInput/Input";
import "./style.css"




const SignIn = () => {
    return (
        <div className="signIn_div">
            <p className="signIn_label">Sign in to ShowHub</p>
            <form className="signIn_form">
                <div className="signIn_item_input">
                    <Input text={"Email "} />
                </div>
                <div className="signIn_item_input">
                <span className="password_link">Forgot password?</span>

                    <Input text={"Password "} />
                    
                </div>
                <div >
                    <button  className="signIn_item_btn">sign in</button>
                </div>

            </form>
            <div className="signIn_footer">
                <p className="signIn_footer_text">New to ShowHub? <Link to="#" className="signIn_footer_link">Create an account</Link> .</p>
            </div>
        </div>
    )

}

export default SignIn;