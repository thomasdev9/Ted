import React, {useState,useEffect,useContext} from 'react'
import './Settings.css'
import Navbar from '../Navbar'
import { UserContext } from '../Contexts/UseContext'
import {useHistory, Redirect} from 'react-router-dom'
import * as yup from 'yup';
import {ErrorMessage, useField,Formik,Form} from 'formik';
import axios from 'axios';
import Footer from '../Footer'

function Settings() {

    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const [message, setMessage] = useState('')

    if(!isAuth){
        return <Redirect to='/'/>
    }

    const validate = yup.object({
        email: yup.string().email('Email is invalid').min(7,'Email must be at least 7 characters.').max(30,'Email must be at most 30 characters.').required('Email is required'),
        password: yup.string().min(5,'Password must be at least 5 characters').max(20,'Password must be at most 20 characters.').required('Password is required')
    })

    const onSumbit = (values, {resetForm}) => {
        const userData = new FormData()
        userData.append('old_email', email)
        userData.append('new_email', values.email)
        userData.append('password', values.password)

        const changeData = async () => {
            await axios.post('http://127.0.0.1:8000/api/change-data/',userData)
            .then(
                data => {
                    setMessage(data.data.Message)
                }
            ).catch(
                error => {
                    console.log(error)
                }
            )
        }

        changeData()
        resetForm({values: ''})
    }

    return (
        <div>
            <Navbar />
            <div className="container-fluid settings-container">
                <Formik
                initialValues={{
                    email: '',
                    password: ''
                }} 
                validationSchema={validate}
                onSubmit={onSumbit}
                >
                {formik => (
                    <Form>
                        <h1>Settings</h1>
                        <div className="settings-input-wrapped">
                            <input type="text" placeholder="Email" className="effect-1" required
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            <ErrorMessage name="email" component="div" className="error"/>
                        </div>
                        <div className="settings-input-wrapped">
                            <input type="password" placeholder="Password" className="effect-1" required
                                id="password"
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            <ErrorMessage name="password" component="div" className="error"/>
                        </div>
                        <button type="submit">Change</button>
                        <h6 className='message-settings'>{message}</h6>
                    </Form>
                )}
                </Formik>
            </div>
            <Footer />
        </div>
    )
}

export default Settings
