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
import Footer from '../Footer'


function Notifications() {

    const [users, setUsers] = useState([])
    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const [requests, setRequests] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [notifications, setNotifications] = useState([])
    const imageUrl = 'http://localhost:8000'

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

        const fetchNotifications = async () => {
            await axios.post('http://127.0.0.1:8000/api/get-notifications/',{
                email: email
            })
            .then(
                data => {
                    setNotifications(data.data)
                }
            )
            .catch(
                error => {
                    console.log(error)
                }
            )
        }

        const getUsers = async () => {
            await axios.get('http://127.0.0.1:8000/api/get-all-users/')
            .then(
                data => {
                    setAllUsers(data.data)
                }
            )
            .catch(
                error => {
                    console.log(error)
                }
            )
        }
        
        fetchUsers();
        fetchNotifications();
        getUsers();
    }, [])

    if(!isAuth){
        return <Redirect to='/'/>
    }

    const acceptRequest = (sender) => {
         const sendAccept = async () => {
            await axios.post('http://127.0.0.1:8000/api/accept-friend-request/',{
                sender: sender,
                receiver: email,
            }).then(
                data => {
                    console.log(data)
                }
            ).catch(
                error => {
                    console.log(error)
                }
            )
        }

        sendAccept()
        setRequests(requests.filter(request => request.email !== sender))
    }

    const declineRequest = (sender) => {
        const sendDecline = async () => {
            await axios.post('http://127.0.0.1/api/decline-friend-request/',{
                sender: sender,
                receiver: email
            }).then(
                data => {
                    console.log(data)
                }
            ).catch(
                error => {
                    console.log(error)
                }
            )
        }

        sendDecline()
        setRequests(requests.filter(request => request.email !== sender))
    }

    const getImage = (id) => {
        var image;
        allUsers.forEach(function(item){
            if(item.id == id){
                image = item.image
            }
        })
        image = 'http://localhost:8000' + image
        return image
    }

    const getName = (id) => {
        var name,firstname,lastname;
        allUsers.forEach(function(item){
            if(item.id == id){
                firstname = item.firstname
                lastname = item.lastname
            }
        })

        name = firstname + ' ' + lastname
        return name
    }

    const formatDate = (date) => {
        var date = String(date)
        date = date.split('T')
        date = date[0]
        return date
    }

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
                                (requests.length > 0)?
                                requests.map((request, index) => 
                                    <li key={request.id}>
                                        <img src={imageUrl + request.image}/>
                                        <h6>{request.firstname} {request.lastname}</h6>
                                        <div className="mx-auto"></div>
                                        <button className="friend-request-confirm" onClick={(e) => acceptRequest(request.email)}>Confirm</button>
                                        <button className="friend-request-delete" onClick={(e) => declineRequest(request.email)}>Delete</button>    
                                    </li>
                                )
                                :<h4 className="empty-requests">No requests yet</h4>
                            }
                        </ul>
                    </div>
                    <div className="col-5 friend-requests">
                        <h2>Notifications</h2>
                        <hr />
                        <ul>
                            {   
                                (notifications.length > 0)
                                ?notifications.map(notification => 
                                    <li>
                                        <img src={getImage(notification.sender_note_id)}/>
                                        <div className="notifications-wrapped">
                                            <p><span>{getName(notification.sender_note_id)}</span> {notification.text}</p>
                                            <p className="date-notification">{formatDate(notification.date)}</p>
                                        </div>
                                    </li>
                                )
                                :<h4>No Notifications yet</h4>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Notifications
