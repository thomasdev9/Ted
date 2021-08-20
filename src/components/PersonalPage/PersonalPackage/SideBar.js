import React from 'react'
import ProfileImage from './images/profile.jpg'
import ImageFriend_1 from './images/friend_1.jpg'
import ImageFriend_2 from './images/friend_2.jpg'
import ImageFriend_3 from './images/friend_3.jpg'
import ImageFriend_4 from './images/friend_4.jpg'
import './SideBar.css'

function SideBar() {
    return (
        <div className="side-sticky">
            <div className="sidebar-container">
                <div className="profile-container">
                    <label>PRO</label>
                    <img className="" src={ProfileImage}/>
                    <h2>John Doe</h2>
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
