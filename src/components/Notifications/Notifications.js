import React, {useState, useEffect, useContext} from 'react'
import Navbar from '../Navbar'
import './Notifications.css'
import ImageFriend_1 from './images/friend_1.jpg'
import ImageFriend_2 from './images/friend_2.jpg'
import ImageFriend_3 from './images/friend_3.jpg'
import ImageFriend_4 from './images/friend_4.jpg'
import {UserContext} from '../Contexts/UseContext'
import {Redirect, withRouter} from 'react-router-dom'
import axios from 'axios'


function Notifications() {

    const [users, setUsers] = useState([])
    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const [requests, setRequests] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            await axios.post('http://127.0.0.1:8000/api/get-friend-requests/',{
                email: email
            }).then(
                response => {
                    setRequests(response.data)
                }
            ).catch(
                error => {
                    console.log(error)
                }
            )
        } 
        
        fetchUsers();
    }, [])

    if(!isAuth){
        return <Redirect to='/'/>
    }

    console.log(requests)

    return (
        <div>
            <Navbar />
            <div className="container-fluid notifications-container">
                <div className="row">
                    <div className="col-5 friend-requests">
                        <h2>Friend Requests</h2>
                        <hr />
                        <ul>
                            {
                            }
                            <li>
                                <img src={ImageFriend_1}/>
                                <h6>Jim Brown</h6>
                                <div className="mx-auto"></div>
                                <button className="friend-request-confirm">Confirm</button>
                                <button className="friend-request-delete">Delete</button>    
                            </li>
                            <li>
                                <img src={ImageFriend_2}/>
                                <h6>Tom Floyd</h6>
                                <div className="mx-auto"></div>
                                <button className="friend-request-confirm">Confirm</button>
                                <button className="friend-request-delete">Delete</button>  
                            </li>
                            <li>
                                <img src={ImageFriend_3}/>
                                <h6>Peter Vikos</h6>
                                <div className="mx-auto"></div>
                                <button className="friend-request-confirm">Confirm</button>
                                <button className="friend-request-delete">Delete</button>  
                            </li>
                            <li>
                                <img src={ImageFriend_4}/>
                                <h6>John Donny</h6>
                                <div className="mx-auto"></div>
                                <button className="friend-request-confirm">Confirm</button>
                                <button className="friend-request-delete">Delete</button>  
                            </li>
                        </ul>
                    </div>
                    <div className="col-5 friend-requests">
                        <h2>Notifications</h2>
                        <hr />
                        <ul>
                            <li>
                                <img src={ImageFriend_1}/>
                                <div className="notifications-wrapped">
                                    <p><span>John Doe</span> likes your photo.</p>
                                    <p className="date-notification">2 mins ago</p>
                                </div>
                            </li>
                            <li>
                                <img src={ImageFriend_2}/>
                                <div className="notifications-wrapped">
                                    <p><span>Tom Floyd</span> comments your photo.</p>
                                    <p className="date-notification">1 hour ago</p>
                                </div>
                            </li>
                            <li>
                                <img src={ImageFriend_3}/>
                                <div className="notifications-wrapped">
                                    <p><span>Victoria Lopez</span> likes your photo.</p>
                                    <p className="date-notification">4 hours ago</p>
                                </div>
                            </li>
                            <li>
                                <img src={ImageFriend_4}/>
                                <div className="notifications-wrapped">
                                    <p><span>Josephine Veno</span> likes your photo.</p>
                                    <p className="date-notification">27 mins ago</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications
