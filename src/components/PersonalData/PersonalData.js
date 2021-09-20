import React from 'react'
import './PersonalData.css'
import Navbar from '../Navbar'
import ImageFriend_1 from './images/friend_1.jpg'
import ImageFriend_2 from './images/friend_2.jpg'
import ImageFriend_3 from './images/friend_3.jpg'
import ImageFriend_4 from './images/friend_4.jpg'

function PersonalData() {
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
                    <form>
                        <div>
                            <input type="text" placeholder="Profession"/>
                            <div className="toggle">
                                <input type="checkbox"/>
                                <label for="" className="onbtn">Private</label>
                                <label for="" className="offbtn">Public</label>
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder="Professional Experience"/>
                            <div className="toggle">
                                <input type="checkbox"/>
                                <label for="" className="onbtn">Private</label>
                                <label for="" className="offbtn">Public</label>
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder="Education"/>
                            <div className="toggle">
                                <input type="checkbox"/>
                                <label for="" className="onbtn">Private</label>
                                <label for="" className="offbtn">Public</label>
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder="Skills"/>
                            <div className="toggle">
                                <input type="checkbox"/>
                                <label for="" className="onbtn">Private</label>
                                <label for="" className="offbtn">Public</label>
                            </div>
                        </div>
                        <button>Update</button>
                    </form>
                </div>
    
                </div>
            </div>
        </div>
    )
}

export default PersonalData
