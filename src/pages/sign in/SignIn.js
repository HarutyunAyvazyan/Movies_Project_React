
import { Link } from "react-router-dom"
import { Formik } from 'formik';
import {styleErorInput, styleErorText } from "../../constants";

import Input from "../../components/costumInput/Input";
import "./style.css"

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
    return errors;
}


const SignIn = () => {
    return (
        <>
            <div className="signIn_div">
                <p className="signIn_label">Sign in to ShowHub</p>
                <div className="signin_inputs_div">
                    <h1 className="signUp_logo">ShowHub</h1>
                    <div className="inputs_div">

                        <Formik
                            initialValues={{ email: '', password: '' }}
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
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
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

                                    <button className="signIn_btn_div" type="submit" disabled={isSubmitting}>
                                        sign in
                                    </button>

                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className="signIn_footer">
                    <p className="signIn_footer_text">New to ShowHub? <Link to="/signUp" className="signIn_footer_link">Sign Up</Link> .</p>
                </div>
            </div>

        </>

    )

}

export default SignIn;