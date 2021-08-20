import React from 'react'
import './MainSection.css'
import PhotoFriend_1 from './images/friend_1.jpg'
import PhotoRoad from './images/road.jpg'
import VideoPosted from './videos/video_1.mp4'

function MainSection() {
    return (
        <div>
            <section className="main-container">
                <div className="post-container">
                    <textarea placeholder="What's in your mind today?"></textarea>
                        <div className="post-list">
                            <div className="list-container">
                                <ul>
                                    <li><i className="material-icons-outlined">photo_camera</i></li>
                                    <li><i className="material-icons-outlined">videocam</i></li>
                                    <li><i className="material-icons-outlined">mic_none</i></li>
                                </ul>
                            </div>  
                            <div className="mx-auto"></div>
                            <button>Post</button>
                        </div>
                </div>

                <div className="posted-container">
                    <div className="poster-info">
                        <img src={PhotoFriend_1}/>
                        <div className="poster-publish">
                            <h6>Jim Brown</h6>
                            <p>Published on 5 May, 2021</p>
                        </div>
                    </div>
                    <div className="posted-content">
                        <img src={PhotoRoad}/>
                    </div>
                    <div className="posted-footer">
                        <div className="posted-likes">
                            <ul>
                                <li>32 Likes</li>
                            </ul>
                            <div className="comment-section">
                                <i className="material-icons-outlined">favorite_border</i>
                                <div className="mx-auto"></div>
                                <textarea placeholder="Add a comment..."></textarea>
                                <button className="comment-button">Post</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="posted-container">
                    <div className="poster-info">
                        <img src={PhotoFriend_1}/>
                        <div className="poster-publish">
                            <h6>Jim Brown</h6>
                            <p>Published on 5 May, 2021</p>
                        </div>
                    </div>
                    <div className="posted-content">
                        <video width="90%" height="100%" controls>
                            <source src={VideoPosted}/>
                        </video>
                    </div>
                    <div className="posted-footer">
                        <div className="posted-likes">
                            <ul>
                                <li>32 Likes</li>
                            </ul>
                            <div className="comment-section">
                                <i className="material-icons-outlined">favorite_border</i>
                                <div className="mx-auto"></div>
                                <textarea placeholder="Add a comment..."></textarea>
                                <button className="comment-button">Post</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="posted-container">
                    <div className="poster-info">
                        <img src={PhotoFriend_1}/>
                        <div className="poster-publish">
                            <h6>Jim Brown</h6>
                            <p>Published on 5 May, 2021</p>
                        </div>
                    </div>
                    <div className="posted-content">
                        <div className="posted-content-text">
                            <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </div>
                    <div className="posted-footer">
                        <div className="posted-likes">
                            <ul>
                                <li>32 Likes</li>
                            </ul>
                            <div className="comment-section">
                                <i className="material-icons-outlined">favorite_border</i>
                                <div className="mx-auto"></div>
                                <textarea placeholder="Add a comment..."></textarea>
                                <button className="comment-button">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default MainSection
