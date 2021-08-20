import React from 'react'
import './Network.css'
import NavBar from '../Navbar'
import ImageFriend_1 from './images/friend_1.jpg'
import ImageFriend_2 from './images/friend_2.jpg'
import ImageFriend_3 from './images/friend_3.jpg'
import ImageFriend_4 from './images/friend_4.jpg'

function Network() {
    return (
        <div>
            <NavBar />
            <div className="container-fluid card-container">
                <h2>Search your Friends</h2>
                <p>Web Job connects professional around the world.</p>
                <div className="input-container">
                    <input type="text" placeholder="Search here..."/>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <img src={ImageFriend_1}/>
                            <h4>John Doe</h4>
                            <span>Google</span>
                            <h6>Senior Java Developer</h6>
                            <button>View Profile</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src={ImageFriend_2}/>
                            <h4>Jim Brown</h4>
                            <span>Google</span>
                            <h6>Senior Java Developer</h6>
                            <button>View Profile</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src={ImageFriend_3}/>
                            <h4>Jack Nilson</h4>
                            <span>Google</span>
                            <h6>Senior Java Developer</h6>
                            <button>View Profile</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <img src={ImageFriend_1}/>
                            <h4>John Doe</h4>
                            <span>Google</span>
                            <h6>Senior Java Developer</h6>
                            <button>View Profile</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src={ImageFriend_2}/>
                            <h4>Jim Brown</h4>
                            <span>Google</span>
                            <h6>Senior Java Developer</h6>
                            <button>View Profile</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src={ImageFriend_3}/>
                            <h4>Jack Nilson</h4>
                            <span>Google</span>
                            <h6>Senior Java Developer</h6>
                            <button>View Profile</button>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Network
