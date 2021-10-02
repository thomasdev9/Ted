import React, {useState, useContext, useEffect} from 'react'
import './Messages.css'
import NavBar from '../Navbar'
import ProfileImage from './images/profile.jpg'
import ImageFriend_1 from './images/friend_1.jpg'
import ImageFriend_2 from './images/friend_2.jpg'
import ImageFriend_3 from './images/friend_3.jpg'
import ImageFriend_4 from './images/friend_4.jpg'
import axios from 'axios';
import {UserContext} from '../Contexts/UseContext'
import {useHistory, Redirect} from 'react-router-dom'
import Footer from '../Footer'

function Messages() {

    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const [friends, setFriends] = useState([])
    const imageUrl = 'http://localhost:8000'
    const [friendEmail, setFriendEmail] = useState('')
    const [friendId, setFriendId] = useState()
    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState([])
    const [user, setUser] = useState()
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const fetchFriends = async () => {
            await axios.post('http://127.0.0.1:8000/api/get-friends/',{
                email: email
            }).then(
                data => {
                    setFriends(data.data)
                }
            ).catch(
                error => {
                    console.log(error)
                }
            )
        }

        const getId = async () => {
            await axios.post('http://127.0.0.1:8000/api/get-id/',{
                email: email
            }).then(
                data => {
                    setUser(data.data)
                }
            ).catch(
                error => {
                    console.log(error)
                }
            )
        }

        fetchFriends()
        getId()
    },[])

    if(!isAuth){
        return <Redirect to='/'/>
    }

    const getConversation = (friend_id,friend_email, firstname, lastname, image) => {
        const sendConversation = async () => {
            axios.post('http://127.0.0.1:8000/api/get-conversation/',{
                member_1: email,
                member_2: friend_email
            }).then(
                data => {
                    console.log(data.data)
                    setMessageList(data.data)
                }
            ).catch(
                error => {
                    console.log(error)
                }
            )
        }
        sendConversation()
        setFriendEmail(friend_email)
        setFriendId(friend_id)
        const imageFriend = document.querySelector('.message-col .chat-start img')
        const nameFriend = document.querySelector('.message-col .chat-start .chat-start-info p')
        imageFriend.src = imageUrl + image
        nameFriend.innerHTML = `Chat with ${firstname} ${lastname}`
    }

    const sendMessage = () => {
        if(friendEmail === ''){
            return;
        }
        const postMessage = async() => {
            await axios.post('http://127.0.0.1:8000/api/send-message/',{
                member_1: email,
                member_2: friendEmail,
                message: message
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
        postMessage()
        const newMessage = {
            message: message,
            sender_id: user.id,
            receiver_id: friendId
        }
        setMessageList(oldList => [...oldList, newMessage]);
        setMessage('')
    } 

    console.log(messageList)

    return (
        <div>
            <NavBar />
            <div className="container-fluid messages-container">
                <div className="row message-box">
                    <div className="col-4">
                        <h2>Contacts</h2>
                        <div className="wrapped-search">
                            <input type="text" placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)}/>
                            <i className="fa fa-search"></i>
                        </div>
                        <ul>
                            {
                                (friends.length > 0)
                                ?friends.filter((value) =>{
                                    if( searchTerm == ""){
                                        return value
                                    }else if(value.firstname.toLowerCase().includes(searchTerm.toLowerCase()) || value.lastname.toLowerCase().includes(searchTerm.toLowerCase())){
                                        return value
                                    }
                                }).map(friend => 
                                    <li onClick={() => getConversation(friend.id,friend.email, friend.firstname, friend.lastname, friend.image)}>
                                        <img src={imageUrl + friend.image}/>
                                        <div className="name-wrapped">
                                            <h5>{friend.firstname} {friend.lastname}</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                                        </div>
                                    </li>
                                )
                                :<h4 className="empty-friends">No Friends yet</h4>
                            }
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
                        {
                            messageList.map(message =>
                            <div>
                                {
                                (message.receiver_id == friendId)
                                ?<div className="message-group-received" key={message.id}>
                                    <div>
                                        <img src={ImageFriend_1} />
                                    </div>
                                    <div className="message-received">
                                        <div className="message-received-text">
                                            {message.message}
                                        </div>
                                    </div>
                                </div>
                                :<div className="message-group-sent" key={message.id}>
                                    <div className="message-sent">
                                        <div className="message-sent-text">
                                            {message.message}
                                        </div>
                                        <div className="message-sent-status">
                                            <img src={ImageFriend_1}/>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>
                            )
                        }
                        </div>
                        <div className="messages-footer">
                            <input type="text" placeholder="Type your message" onChange={(e) => setMessage(e.target.value)} value={message}/>
                            <button onClick={sendMessage}><i className="fa fa-send"></i></button>
                            <i className="fa fa-comment comment-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Messages
