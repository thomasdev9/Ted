import React, {useState,useEffect,useContext} from 'react'
import './PersonalData.css'
import Navbar from '../Navbar'
import ImageFriend_1 from './images/friend_1.jpg'
import ImageFriend_2 from './images/friend_2.jpg'
import ImageFriend_3 from './images/friend_3.jpg'
import ImageFriend_4 from './images/friend_4.jpg'
import { UserContext } from '../Contexts/UseContext'
import {useHistory, Redirect} from 'react-router-dom'
import * as yup from 'yup';
import {ErrorMessage, useField,Formik,Form} from 'formik';
import axios from 'axios';
import { useForceUpdate } from '@react-spring/shared'
import Footer from '../Footer'

function PersonalData() {

    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const [profession, setProfession] = useState('')
    const [experience, setExperience] = useState('')
    const [education, setEducation] = useState('')
    const [skills, setSkills] = useState('')
    const [message, setMessage] = useState('')
    const [stateProfesion, setStateProfesion] = useState(true)
    const [stateExperience, setStateExperience] = useState(true)
    const [stateEducation, setStateEducation] = useState(true)
    const [stateSkills, setStateSkills] = useState(true)

    const validate = yup.object({
        profession: yup.string().max(40,'Proffesion must be at most 40 characters'),
        experience: yup.string().max(400,'Password must be at most 400 characters'),
        education: yup.string().max(400, 'Education must be at most 400 characters'),
        skills: yup.string().max(400,'Skills must be at most 400 characters')
    })

    if(!isAuth){
        return <Redirect to='/'/>
    }

    const changeProfesion = () => {
        setStateProfesion(!stateProfesion)
    }

    const changeExperience = () => {
        setStateProfesion(!stateProfesion)
    }

    const changeEducation = () => {
        setStateEducation(!stateEducation)
    }

    const changeSkills = () => {
        setStateSkills(!stateSkills)
    }

    const onSubmit = (values, {resetForm}) => {
        const userData = new FormData()
        userData.append('email', email)
        userData.append('profession', values.profession)
        userData.append('professional_experience', values.experience)
        userData.append('education', values.education)
        userData.append('skills', values.skills)
        userData.append('state_profession', stateProfesion)
        userData.append('state_experience', stateExperience)
        userData.append('state_education', stateEducation)
        userData.append('state_skills', stateSkills)

        const sendPersonalData = async () => {
            await axios.post('http://127.0.0.1:8000/api/personal-data/',userData)
            .then(
                data => {
                    setMessage(data.data.Message)
                }
            ).catch(
                error => console.log(error)
            )
        }

        sendPersonalData()
        resetForm({values: ''})
    }

    return (
        <div>
            <Navbar />
            <div className="container-fluid personal-data-container">
                <div className="row">
                <div className="col-3 personal-data-wrapped">
                    <img src={ImageFriend_1}/>
                    <div className="welcome-text">
                        <span>Hello,</span>
                        <h1>John Doe</h1>
                    </div>
                </div>
                <div className="col-6 personal-data-form">
                    <h2>Personal Data</h2>
                    <Formik
                    initialValues={{
                        profession: '',
                        experience: '',
                        education: '',
                        skills: ''
                    }}
                    validationSchema={validate}
                    onSubmit={onSubmit}
                    >
                    {formik => (
                        <Form>
                            <div>
                                <input type="text" placeholder="Profession" onChange={(e) => setProfession(e.target.value)}
                                    className="effect-1"
                                    id="profession"
                                    name="profession"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.profession}
                                />
                                <div className="toggle">
                                    <input type="checkbox" onClick={changeProfesion}/>
                                    <label for="" className="onbtn">Private</label>
                                    <label for="" className="offbtn">Public</label>
                                </div>
                            </div>
                            <ErrorMessage name="profession" component="div" className="error"/>
                            <div>
                                <input type="text" placeholder="Professional Experience" onChange={(e) => setExperience(e.target.value)}
                                    className="effect-1"
                                    id="experience"
                                    name="experience"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.experience}
                                />
                                <div className="toggle">
                                    <input type="checkbox" onClick={changeExperience}/>
                                    <label for="" className="onbtn">Private</label>
                                    <label for="" className="offbtn">Public</label>
                                </div>
                            </div>
                            <ErrorMessage name="experience" component="div" className="error"/>
                            <div>
                                <input type="text" placeholder="Education" onChange={(e) => setEducation(e.target.value)}
                                    className="effect-1"
                                    id="education"
                                    name="education"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.education}
                                />
                                <div className="toggle">
                                    <input type="checkbox" onClick={changeEducation}/>
                                    <label for="" className="onbtn">Private</label>
                                    <label for="" className="offbtn">Public</label>
                                </div>
                            </div>
                            <ErrorMessage name="education" component="div" className="error"/>
                            <div>
                                <input type="text" placeholder="Skills" onChange={(e) => setSkills(e.target.value)}
                                    className="effect-1"
                                    id="skills"
                                    name="skills"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.skills}
                                />
                                <div className="toggle">
                                    <input type="checkbox" onClick={changeSkills}/>
                                    <label for="" className="onbtn">Private</label>
                                    <label for="" className="offbtn">Public</label>
                                </div>
                            </div>
                            <ErrorMessage name="skills" component="div" className="error"/>
                            <button type="submit">Update</button>
                            <h6 className="message-data">{message}</h6>
                        </Form>
                    )}
                    </Formik>
                </div>
    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PersonalData
