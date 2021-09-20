import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import ProfileImage from './images/profile.jpg'
import ImageFriend_1 from './images/friend_1.jpg'
import ImageFriend_2 from './images/friend_2.jpg'
import ImageFriend_3 from './images/friend_3.jpg'
import ImageFriend_4 from './images/friend_4.jpg'
import './SideBar.css'
import { UserContext } from '../../Contexts/UseContext'

function SideBar() {

    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [image, setImage] = useState()
    const imageUrl = 'http://localhost:8000'

    useEffect(
        () => {
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
    }, [])

    return (
        <div className="side-sticky">
            <div className="sidebar-container">
                <div className="profile-container">
                    <label>PRO</label>
                    <img className="" src={imageUrl + image}/>
                    <h2>{firstName}</h2>
                    <h6>Web Developer</h6>
                    
                    <button>View Profile</button>
                </div>
                <div className="network-container">
                    <h2>Network</h2>
                    <hr />
                    <ul>
                        <li>
                            <img src={ImageFriend_1}/>
                            <h6>Jim Brown</h6>
                            <span class="material-icons-outlined friend-view-more">chevron_right</span>    
                        </li>
                        <li>
                            <img src={ImageFriend_2}/>
                            <h6>Tom Floyd</h6>
                            <span class="material-icons-outlined friend-view-more">chevron_right</span>
                        </li>
                        <li>
                            <img src={ImageFriend_3}/>
                            <h6>Peter Vikos</h6>
                            <span class="material-icons-outlined friend-view-more">chevron_right</span>
                        </li>
                        <li>
                            <img src={ImageFriend_4}/>
                            <h6>John Donny</h6>
                            <span class="material-icons-outlined friend-view-more">chevron_right</span>
                        </li>
                    </ul>
                    <div className="friend-button-container">
                        <button>View All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
