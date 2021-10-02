import React, {useState, useEffect, useContext} from 'react'
import './CoverPage.css'
import ImageFriend_1 from './images/friend_1.jpg'
import ImageFriend_2 from './images/friend_2.jpg'
import ImageFriend_3 from './images/friend_3.jpg'
import ImageFriend_4 from './images/friend_4.jpg'
import { UserContext } from '../../Contexts/UseContext'
import axios from 'axios'

function CoverPage() {

    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const [jobs, setJobs] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/get-jobs/',{
            email: email
        })
        .then(
            data => {
               setJobs(data.data.slice(0,5))
               //setJobs(jobs.slice(0,5))
            }
        )
        .catch(
            error => {
                console.log(error)
            }
        )

        axios.get('http://127.0.0.1:8000/api/get-all-users/')
        .then(
            data => {
                setUsers(data.data)
            }
        )
        .catch(
            error => {
                console.log(error)
            }
        )

    },[])

    const formatDate = (date) => {
        var date = String(date)
        date = date.split('T')
        date = date[0]
        return date
    }

    const jobUserName = (user_id) => {
        var name,firstname,lastname;
        users.forEach(function(item){
            if(item.id == user_id){
                firstname = item.firstname
                lastname = item.lastname
            }
        })
        name = firstname + ' ' + lastname
        return name
    }

    return (
        <div>
            <section className="container-cover-page">
                {
                    (jobs.length > 0)
                    ?jobs.map(job => 
                        <div className="card-job">
                            <p>Job <span>{formatDate(job.date)}</span></p>
                            <h6>{job.title}</h6>
                            <h6 className="job-brand">{job.brand}</h6>
                            <div className="card-job-info">
                                <img src={ImageFriend_1}/>
                                <div className="card-job-publish">
                                    <p>Employer</p>
                                    <h6>{jobUserName(job.user_id)}</h6>
                                </div>
                            </div>
                        </div>
                    )
                    :<h2 className="empty-jobs-list">No jobs yet</h2>
                }
                
            </section>
        </div>
    )
}

export default CoverPage
