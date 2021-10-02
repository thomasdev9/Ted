import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import ProfileImage from './images/profile.jpg'
import ImageFriend_1 from './images/friend_1.jpg'
import ImageFriend_2 from './images/friend_2.jpg'
import ImageFriend_3 from './images/friend_3.jpg'
import ImageFriend_4 from './images/friend_4.jpg'
import './SideBar.css'
import { UserContext } from '../../Contexts/UseContext'
import {Redirect, withRouter, Link} from 'react-router-dom'

function SideBar() {

    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [image, setImage] = useState()
    const [friends, setFriends] = useState([])
    const imageUrl = 'http://localhost:8000'

    useEffect(() => {
            axios.post('http://127.0.0.1:8000/api/user-data/',{
                email: email
            }).then(response =>{
                const user = response.data[0]
                setFirstName(user.firstname)
                setLastName(user.lastname)
                setImage(user.image)
            })
            .catch(
                error => console.log(error)
            )

            axios.post('http://127.0.0.1:8000/api/get-friends/',{
                email: email
            })
            .then(
                data => {
                    setFriends(data.data)
                }
            )
            .catch(
                error => {
                    console.log(error)
                }
            )
    }, [])

    return (
        <div className="side-sticky">
            <div className="sidebar-container">
                <div className="profile-container">
                    <label>PRO</label>
                    <img className="" src={imageUrl + image}/>
                    <h2>{firstName}</h2>
                    <h6>{email}</h6>
                    
                    <button><Link to={{ pathname: '/user-page', state: { userEmail: email} }} className="sidebar-view-profile">View Profile</Link></button>
                </div>
                <div className="network-container">
                    <h2>Network</h2>
                    <hr />
                    <ul>
                        {
                            (friends.length > 0)
                            ?friends.map(friend => 
                                <li>
                                    <img src={imageUrl + friend.image}/>
                                    <h6>{friend.firstname} {friend.lastname}</h6>
                                    <span class="material-icons-outlined friend-view-more">chevron_right</span>    
                                </li>
                            )
                            :<h4 className="empty-friends">No Friends yet</h4>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar
