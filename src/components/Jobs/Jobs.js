import React,{useState, useEffect, useContext} from 'react'
import { UserContext } from '../Contexts/UseContext'
import './Jobs.css'
import Hero from './hero/Hero'
import NavBar from '../Navbar'
import Brand_3 from './images/brand_3.jpg'
import Brand_1 from './images/mc.jpg'
import Brand_2 from './images/ibm.png'
import Brand_4 from './images/tesla.jpg'
import axios from 'axios'
import Footer from '../Footer'
import ModalJob from './modal/ModalJob'

function Jobs() {

    var title = '';
    var brand='';
    var location = '';
    var desc = '';
    var name = '';
    var date = '';
    var image;
    var footer;
    const imageUrl = 'http://127.0.0.1:8000'

    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const [jobs, setJobs] = useState([])
    const [myJobs, setMyJobs] = useState([])
    const [state, setState] = useState(true)
    const [message, setMessage] = useState('')
    const [jobId, setJobId] = useState()
    const [showModal,setShowModal] = useState(false)
    const [showSignUp,setSignUp] = useState(false)
    const [participants, setParticipants] = useState([])

    useEffect(() => {
        const getJobs = async () => {
            await axios.post('http://127.0.0.1:8000/api/get-jobs/',{
                email: email
            })
            .then(
                data => {
                    setJobs(data.data)
                }
            ).catch(
                error => {
                    console.log(error)
                }
            )
        }

        const getMyJobs = async () => {
            await axios.post('http://127.0.0.1:8000/api/get-my-jobs/', {
                email: email
            })
            .then(
                data => {
                    setMyJobs(data.data)
                }
            ).catch(
                error => {
                    console.log(error)
                }
            )
        }

        getJobs()
        getMyJobs()
        const imageJob = document.querySelector('.job-display img');
        const buttonJob = document.querySelector('.job-display .button-apply')
        const buttonParticipants = document.querySelector('.job-display .button-participants')
        imageJob.style.visibility = 'hidden'
        buttonJob.style.visibility = 'hidden'
        buttonParticipants.style.visibility = 'hidden'
    }, [])

    const jobHandle = (title,brand,location,date,image,description,id) => {
        const titleJob = document.querySelector('.job-display h3');
        const brandJob = document.querySelector('.job-display h4');
        const locationJob = document.querySelector('.job-display p');
        const descJob = document.querySelector('.job-display .desc');
        const dateJob = document.querySelector('.job-display span');
        const imageJob = document.querySelector('.job-display img');
        const buttonJob = document.querySelector('.job-display .button-apply')
        const buttonParticipants = document.querySelector('.job-display .button-participants')
        setJobId(id)
        titleJob.innerText = title;
        brandJob.innerText = brand;
        locationJob.innerText = location;
        descJob.innerText = description;
        dateJob.innerText = date;
        imageJob.src = imageUrl + image;
        imageJob.style.visibility = 'visible'
        buttonJob.style.visibility = 'visible'
        buttonParticipants.style.visibility = 'visible'
        setMessage('')
    }

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const formatDate = (date) => {
        var date = String(date)
        date = date.split('T')
        date = date[0]
        return date
    }

    const changeState = () => {
        setState(!state)
    }

    const applyJob = () => {
        const sendApplyData = async () => {
            await axios.post('http://127.0.0.1:8000/api/apply-job/',{
                email: email,
                job_id: jobId
            }).then(
                data => {
                    setMessage(data.data.Message)
                }
            ).catch(
                error => {
                    console.log(error)
                }
            )
        }

        sendApplyData()
    }

    const participantsJob = () => {
        const sendParticipants = async () => {
            await axios.post('http://127.0.0.1:8000/api/get-participants/',{
                email: email,
                job_id: jobId
            }).then(
                data => {
                    setParticipants(data.data)
                }
            ).catch(
                error => {
                    console.log(error)
                }
            )
        }

        sendParticipants()
        openModal()
    }
    
    return (
        <div>
            <NavBar />
            <ModalJob showModal={showModal} setShowModal={setShowModal} participants={participants}/>
            <Hero />
            <div className="container-fluid container-job">
                <div className="row">
                    <div className="col-6">
                        <h6>Search for job? You are at the right place.</h6>
                        <p>52 Results of Jobs</p>
                        <div className="jobs-button-toggle">
                            <input type="checkbox" onClick={changeState}/>
                            <label for="" className="all-jobs">All Jobs</label>
                            <label for="" className="my-jobs">My Jobs</label>
                        </div>
                        {(jobs.length > 0 || myJobs.length > 0)
                            ? 
                            (state === true)
                            ?
                            (jobs.length >0)?
                            jobs.map(job => 
                                <div className="job-body" onClick={(e) => jobHandle(job.title,job.brand,job.location,job.date,job.image,job.job_description,job.id)}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-2">
                                                <img src={imageUrl + job.image}/>
                                            </div>
                                            <div className="col-10">
                                                <h6>{job.title}</h6>
                                                <p className="job-brand">{job.brand}</p>
                                                <p className="job-location">{job.location}</p>
                                                <div className="job-footer">
                                                    <span>{formatDate(job.date)}</span>
                                                    <button>View More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            :<h2 className="empty-jobs">No jobs yet</h2>
                            :(myJobs.length > 0)
                            ?myJobs.map(myJob=>  
                                <div className="job-body" onClick={(e) => jobHandle(myJob.title,myJob.brand,myJob.location,myJob.date,myJob.image,myJob.job_description,myJob.id)}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-2">
                                                <img src={imageUrl + myJob.image}/>
                                            </div>
                                            <div className="col-10">
                                                <h6>{myJob.title}</h6>
                                                <p className="job-brand">{myJob.brand}</p>
                                                <p className="job-location">{myJob.location}</p>
                                                <div className="job-footer">
                                                    <span>{formatDate(myJob.date)}</span>
                                                    <button>View More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            :<h2 className="empty-jobs">You haven't post jobs yet.</h2>
                            :
                                <h2 className="empty-jobs">No jobs yet</h2>
                        }
                    </div>
    
                    <div className="col-6 job-display">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">
                                    <img src=""/>
                                </div>
                                <div className="col-10">
                                    <h3></h3>
                                    <h4></h4>
                                    <p className="location"></p>
                                    <span></span>
                                    <p className="desc"></p>
                                    <button className="button-apply" onClick={applyJob}>Apply Now</button>
                                    <button className="button-participants" onClick={participantsJob}>Participants</button>
                                    <h6 className="message-apply">{message}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Jobs
