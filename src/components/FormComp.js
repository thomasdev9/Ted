import React, {useContext,useState} from 'react'
import './Form.css'
import * as yup from 'yup';
import axios from 'axios';
import {userSchema} from './Validations/UserValidation';
import {ErrorMessage, useField,Formik,Form} from 'formik';
import {UserContext} from './Contexts/UseContext'
import PersonalPage from './PersonalPage/PersonalPage';
import ProtectedRoute from '../components/ProtectedRoute'
import {useHistory, Redirect} from 'react-router-dom'

function FormComp() {

    let history = useHistory()

    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const [message, setMessage] = useState('')

    const validate = yup.object({
        email: yup.string().email('Email is invalid').required('Email is required'),
        password: yup.string().min(5,'Password must be at least 5 characters').max(12,'Password must be at most 12 characters').required('Password is required')
    })

    const onSubmit = (values, {resetForm}) => {
        const userData = new FormData()
        userData.append('email',values.email)
        userData.append('password',values.password)

        axios.post('http://127.0.0.1:8000/api/login/',{
            email: values.email,
            password: values.password
        })
        .then(response => {
            setMessage(response.data.Message)
            const user = response.data[0]
            setEmail(user.email)
            setIsAuth(true)
            history.push('/personal')
        })
        .catch(error => {
            console.log(error)
        })

        resetForm({values: ''})

    }

    return (
        <Formik initialValues={{
            email: '',
            password: ''
        }}
        validationSchema={validate}
        onSubmit={onSubmit}
        >

            {formik => (
                <div>
                    <h1>{email}</h1>
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
                            <p className="user-not-exists">{message}</p>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default FormComp
