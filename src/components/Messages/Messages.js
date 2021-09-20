import React from 'react'
import './Messages.css'
import NavBar from '../Navbar'
import ProfileImage from './images/profile.jpg'
import ImageFriend_1 from './images/friend_1.jpg'
import ImageFriend_2 from './images/friend_2.jpg'
import ImageFriend_3 from './images/friend_3.jpg'
import ImageFriend_4 from './images/friend_4.jpg'

function Messages() {
    return (
        <div>
            <NavBar />
            <div className="container-fluid messages-container">
                <div className="row message-box">
                    <div className="col-4">
                        <h2>Contacts</h2>
                        <div className="wrapped-search">
                            <input type="text" placeholder='Search'/>
                            <i className="fa fa-search"></i>
                        </div>
                        <ul>
                            <li>
                                <img src={ImageFriend_1}/>
                                <div className="name-wrapped">
                                    <h5>John Doe</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </li>
                            <li>
                                <img src={ImageFriend_2}/>
                                <div className="name-wrapped">
                                    <h5>John Doe</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </li>
                            <li>
                                <img src={ImageFriend_3}/>
                                <div className="name-wrapped">
                                    <h5>John Doe</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </li>
                            <li>
                                <img src={ImageFriend_4}/>
                                <div className="name-wrapped">
                                    <h5>John Doe</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </li>
                            <li>
                                <img src={ImageFriend_1}/>
                                <div className="name-wrapped">
                                    <h5>John Doe</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </li>
                            <li>
                                <img src={ImageFriend_4}/>
                                <div className="name-wrapped">
                                    <h5>John Doe</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </li>
                            <li>
                                <img src={ImageFriend_4}/>
                                <div className="name-wrapped">
                                    <h5>John Doe</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </li>
                            <li>
                                <img src={ImageFriend_4}/>
                                <div className="name-wrapped">
                                    <h5>John Doe</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-8 message-col">
                        <div className="chat-start">
                            <img src={ImageFriend_1} />
                            <div className="chat-start-info">
                                <p>Chat with John Doe</p>
                                <span>Already 55 messages</span>
                            </div>
                        </div>
                        <hr/>
                        <div className="messages-scroll">
                        <div className="message-group-received">
                            <div>
                                <img src={ImageFriend_1} />
                            </div>
                            <div>
                                <div className="message-received">
                                    <div className="message-received-text">
                                        Hey man how it's going?
                                    </div>
                                </div>
                                <div className="message-received">
                                    <div className="message-received-text">
                                        Hey man how it's going?
                                    </div>
                                </div>
                                <div className="message-received">
                                    <div className="message-received-text">
                                        Hey man how it's going?
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message-group-sent">
                                <div className="message-sent">
                                    <div className="message-sent-text">
                                        Hey man how it's going?
                                    </div>
                                    <div className="message-sent-status"></div>
                                </div>
                                
                                <div className="message-sent">
                                    <div className="message-sent-text">
                                        Hey man how it's going?
                                    </div>
                                    <div className="message-sent-status"></div>
                                </div>
                                
                                <div className="message-sent">
                                    <div className="message-sent-text">
                                        Hey man how it's going?
                                    </div>
                                    <div className="message-sent-status">
                                        <img src={ImageFriend_1}/>
                                    </div>
                                </div>
                                
                        </div>
                        <div className="message-group-received">
                            <div>
                                <img src={ImageFriend_1} />
                            </div>
                            <div>
                                <div className="message-received">
                                    <div className="message-received-text">
                                        Hey man how it's going?
                                    </div>
                                </div>
                                <div className="message-received">
                                    <div className="message-received-text">
                                        Hey man how it's going?
                                    </div>
                                </div>
                                <div className="message-received">
                                    <div className="message-received-text">
                                        Hey man how it's going?
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message-group-sent">
                                <div className="message-sent">
                                    <div className="message-sent-text">
                                        Hey man how it's going?
                                    </div>
                                    <div className="message-sent-status"></div>
                                </div>
                                
                                <div className="message-sent">
                                    <div className="message-sent-text">
                                        Hey man how it's going?
                                    </div>
                                    <div className="message-sent-status"></div>
                                </div>
                                
                                <div className="message-sent">
                                    <div className="message-sent-text">
                                        Hey man how it's going?
                                    </div>
                                    <div className="message-sent-status"></div>
                                </div>
                                
                        </div>
                        </div>
                        <div className="messages-footer">
                            <input type="text" placeholder="Type your message"/>
                            <button><i className="fa fa-send"></i></button>
                            <i className="fa fa-comment comment-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages
