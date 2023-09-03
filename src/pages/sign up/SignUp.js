import { Link } from "react-router-dom";
import Input from "../../components/costumInput/Input";
import "./style.css"


const SignUp = () => {
  return (
    <div className="signUp_div">
      <p className="signUp_label">Sign up to ShowHub</p>
      <form className="signUp_form">
        <div className="signUp_item_input">
          <Input text={"Username "} />
        </div>

        <div className="signUp_item_input">
          <Input text={"Email "} />
        </div>

        <div className="signUp_item_input">
          <Input text={"Number "} />
        </div>
        
         <div className="signUp_item_input">
          <Input text={"Password "} />
        </div>
        
         <div className="signUp_item_input">
          <Input text={"Confirm password "} />
        </div>

        <div className="signUp_item_input">
          <button className="signUp_item_btn">sign up</button>
        </div>

      </form>
      <div className="signUp_footer">
        <p className="signUp_footer_text">already have a account ? <Link to="#" className="signIn_footer_link"> Sign in</Link> .</p>
      </div>
    </div>
  )
}

export default SignUp;