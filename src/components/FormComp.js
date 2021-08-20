import React from 'react'
import './Form.css'
import * as yup from 'yup';
import {userSchema} from './Validations/UserValidation';
import {ErrorMessage, useField,Formik,Form} from 'formik';

function FormComp() {

    const validate = yup.object({
        email: yup.string().email('Email is invalid').required('Email is required'),
        password: yup.string().min(5,'Password must be at least 5 characters').max(12,'Password must be at most 12 characters').required('Password is required')
    })

    return (
        <Formik initialValues={{
            email: '',
            password: ''
        }}
        validationSchema={validate}
        >

            {formik => (
                <div>
                    <div className="form-container-login">
                        <Form className="form-login">
                            <h1>Login</h1>
                            <div className="input-container-login">
                                <label>Email</label>
                                <input type="text" className="effect-1" required
                                    id="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                <ErrorMessage name="email" component="div" className="error"/>
                            </div>
                            <div className="input-container-login">
                                <label>Password</label>
                                <input type="password" className="effect-1" required
                                    id="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                <ErrorMessage name="password" component="div" className="error"/>
                            </div>
                            <button type="submit" className="button-login">Login<span className="material-icons-outlined">chevron_right</span></button>
                            <p>Don't have an account yet? <span>Sign up</span></p>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default FormComp
