import React from 'react'
import './SignUp.css'
import {ErrorMessage, useField,Formik,Form} from 'formik';
import * as yup from 'yup';

function SignUp() {

    const validate = yup.object({
        firstName: yup.string().min(3,'Must be at least 3 characters').max(15,'Must be at most 15 characters').required('First Name is required'),
        lastName: yup.string().min(3,'Must be at least 3 characters').max(15,'Must be at most 15 characters').required('Last Name is required'),
        password: yup.string().min(5,'Must be at least 5 characters').max(15,'Must at least 15 characters').required('Password is required'),
        confirmPassword: yup.string().oneOf([yup.ref('password'),null],'Passwords must match').required('Confirm password must match'),
        phone: yup.string().min(8,'Must be at least 8 characters').max(15,'Must be at most 15 characters').required('Phone is required'),
        email: yup.string().email('Email is invalid').required('Email is required')
    })

    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            phone: '',
            email: ''
        }} 
        validationSchema={validate}
        >
            {formik => (
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 form-container-sign-up">
                                <h1>Sign Up</h1>
                                <Form className="form-sign-up">
                                    <div className="input-container-sign-up">
                                        <div className="input-wrapped-sign-up">
                                            <input type="text" placeholder="First Name"
                                                id="firstName"
                                                name="firstName"
                                                className="effect-1"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.firstName}
                                                required
                                            />
                                            <ErrorMessage name="firstName" component="div" className="error-sign-up"/>
                                        </div>
                                        <div className="input-wrapped-sign-up">
                                            <input type="text" placeholder="Last Name"
                                                id="lastName"
                                                name="lastName"
                                                className="effect-1"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.lastName}
                                                required
                                            />
                                            <ErrorMessage name="lastName" component="div" className="error-sign-up"/>
                                        </div>
                                    </div>
                                    <div className="input-container-sign-up">
                                        <div className="input-wrapped-sign-up">
                                            <input type="password" placeholder="Password"
                                                id="password"
                                                name="password"
                                                className="effect-1"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                                required
                                            />
                                            <ErrorMessage name="password" component="div" className="error-sign-up"/>
                                        </div>
                                        
                                        <div className="input-wrapped-sign-up">
                                            <input type="password" placeholder="Confirm Password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                className="effect-1"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.confirmPassword}
                                                required
                                            />
                                            <ErrorMessage name="confirmPassword" component="div" className="error-sign-up"/>
                                        </div>
                                    </div>
                                    <div className="input-container-sign-up">
                                        <div className="input-wrapped-sign-up">
                                            <input type="text" placeholder="Phone"
                                                id="phone"
                                                name="phone"
                                                className="effect-1"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.phone}
                                                required
                                            />
                                            <ErrorMessage name="phone" component="div" className="error-sign-up"/>
                                        </div>
                                        
                                        <div className="input-wrapped-sign-up">
                                            <input type="text" placeholder="Email"
                                                id="email"
                                                name="email"
                                                className="effect-1"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                                required
                                            />
                                            <ErrorMessage name="email" component="div" className="error-sign-up"/>
                                        </div>
                                    </div>
                                    <div className="image-sign-up">
                                        <label for="img">Select image: &nbsp;</label>
                                        <input type="file" id="img" name="img" accept="image/*" />
                                    </div>
                                    <button className="button-sign">Sign Up</button>
                                    <p>Do you have already an account?<span>Log in</span></p>
                                </Form>
                            </div>
                        </div>
                    </div> 
                </div>
            )}
        </Formik>
    )
}

export default SignUp