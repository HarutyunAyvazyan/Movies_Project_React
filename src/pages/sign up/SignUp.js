import { Link } from "react-router-dom";
import Input from "../../components/costumInput/Input";
import "./style.css"
import { Formik } from 'formik';
import { styleErorInput, styleErorText } from "../../constants";

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = <div style={styleErorText}>Required</div>;
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = <div style={styleErorText}>Invalid email address</div>;
  }
  if (!values.password) {
    errors.password = <div style={styleErorText}>Required</div>;
  }
  if (!values.userName) {
    errors.userName = <div style={styleErorText}>Required</div>;
  } else if (values.userName.length > 15) {
    errors.userName = <div style={styleErorText}>Must be 15 characters or less</div>;
  }
  if (!values.number) {
    errors.number = <div style={styleErorText}>Required</div>;
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = <div style={styleErorText}>Required</div>;
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = <div style={styleErorText}>Password does  not match</div>
  }

  return errors;
}

const SignUp = () => {
  return (
    <div className="signUp_div">
      <p className="signUp_label">Sign up to ShowHub</p>
      <div className="signUp_main_div">
        <h1 className="signUp_logo">ShowHub</h1>
        <div className="signUp_inputs_div">

          <Formik
            initialValues={{ userName: "", email: "", number: "", password: "", confirmPassword: "" }}
            validate={validate}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  style={errors.userName && styleErorInput}
                  type="text"
                  name="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userName}
                  placeholder={"Enter your name"}
                  label={"UserName "}
                />
                {errors.userName && touched.userName && errors.userName}
                <Input
                  style={errors.email && styleErorInput}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder={"Enter your email"}
                  label={"Email "}
                />
                {errors.email && touched.email && errors.email}
                <Input
                  style={errors.number && styleErorInput}
                  placeholder={"Enter your number"}
                  name="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.number}
                  type={"text"}
                  label={"Number "}
                />
                {errors.number && touched.number && errors.number}
                <Input
                  style={errors.password && styleErorInput}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder={"**************"}
                  label={"Password "}
                />
                {errors.password && touched.password && errors.password}
                <Input
                  style={errors.confirmPassword && styleErorInput}
                  placeholder={"Enter your password"}
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  type={"password"}
                  label={"Confirm password "}
                />
                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                <button className="signUp_btn_div" type="submit" disabled={isSubmitting}>
                  sign up
                </button>

              </form>
            )}
          </Formik>
        </div>
      </div>
      <div className="signUp_footer">
        <p className="signUp_footer_text">already have a account ? <Link to="/SignIn" className="signIn_footer_link"> Sign in</Link> .</p>
      </div>
    </div>
  )
}

export default SignUp;