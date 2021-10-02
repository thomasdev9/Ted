import React, {useState, useContext} from 'react'
import './Hero.css'
import * as yup from 'yup';
import {ErrorMessage, useField,Formik,Form} from 'formik';
import axios from 'axios';
import {UserContext} from '../../Contexts/UseContext'
import {useHistory, Redirect} from 'react-router-dom'

function Hero() {

    const [image, setImage] = useState()
    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const [message, setMessage] = useState('')

    if(!isAuth){
        return <Redirect to='/'/>
    }

    const validate = yup.object({
        title: yup.string().min(2,'Title must be at least 2 characters').max(30,'Title must be at most 30 characters').required('Tittle is required'),
        brand: yup.string().min(5,'Brand must be at least 5 characters').max(30,'Brand must be at most 30 characters').required('Brand is required'),
        location: yup.string().min(2,'Location must be at least 2 characters').max(30,'Location must be at most 30 characters').required('Location is required'),
        description: yup.string().min(10,'Description must be at least 10 characters').required('Description is required')
    })

    const onSubmit = (values, {resetForm}) => {
        let jobData = new FormData()
        jobData.append('email', email)
        jobData.append('title' ,values.title)
        jobData.append('brand', values.brand)
        jobData.append('location', values.location)
        jobData.append('description', values.description)
        jobData.append('image', image)

        const sendJobData = async () => {
            await axios.post('http://127.0.0.1:8000/api/create-job/',jobData)
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

        sendJobData()
        resetForm({values: ''})
    }

    return (
        <div>
            <section>
                <div className="container-fluid job-hero-container">
                    <div className="row">
                        <div className="col-6">
                            <span>Premium Platform</span>
                            <h1>Make Job Finding<br/> Easier with<br/> Web Job</h1>
                        </div>
                        <Formik initialValues={{
                            title: '',
                            brand: '',
                            location: '',
                            description: ''
                        }}
                            validationSchema={validate}
                            onSubmit= {onSubmit}
                        >
                        {formik => (
                            <div className="col-6 job-form">
                                <h3>Post New Job</h3>
                                <Form>
                                    <div className="input-wrapped-job">
                                        <input type="text" placeholder="Job Title"
                                            id="title"
                                            name="title"
                                            className="effect-1"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.title}
                                            required
                                        />
                                        <ErrorMessage name="title" component="div" className="error-job"/>
                                    </div>
                                    <div className="input-wrapped-job">
                                        <input type="text" placeholder="Brand"
                                            id="brand"
                                            name="brand"
                                            className="effect-1"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.brand}
                                            required
                                        />
                                        <ErrorMessage name="brand" component="div" className="error-job"/>
                                    </div>
                                    <div className="input-wrapped-job">
                                        <input type="text" placeholder="Location"
                                            id="location"
                                            name="location"
                                            className="effect-1"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.location}
                                            required
                                        />
                                        <ErrorMessage name="location" component="div" className="error-job"/>
                                    </div>
                                    <div className="input-wrapped-job">
                                        <textarea type="text" placeholder="Job Description"
                                            id="description"
                                            name="description"
                                            className="effect-1"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.description}
                                            required
                                        />
                                        <ErrorMessage name="description" component="div" className="error-job"/>
                                    </div>
                                    <div className="job-image">
                                        <label for="img">Select image: &nbsp;</label>
                                        <input type="file" id="img" name="img" accept="image/*" 
                                            onChange={(e) => setImage(e.target.files[0])}
                                        />
                                    </div>
                                    <button>Post</button>
                                    <h5 className="job-possted">{message}</h5>
                                </Form>
                            </div>
                        )}
                        </Formik>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
