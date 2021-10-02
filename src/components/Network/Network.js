import React, {useState, useEffect, useContext}from 'react'
import './Network.css'
import NavBar from '../Navbar'
import Page from './Page'
import ImageFriend_1 from './images/friend_1.jpg'
import ImageFriend_2 from './images/friend_2.jpg'
import ImageFriend_3 from './images/friend_3.jpg'
import ImageFriend_4 from './images/friend_4.jpg'
import {UserContext} from '../Contexts/UseContext'
import {Redirect, withRouter} from 'react-router-dom'
import {BrowserRouter, Route, Link, Switch, Router} from 'react-router-dom';
import axios from 'axios'
import UserPage from '../UserPage/UserPage'
import Footer from '../Footer'

function Network() {

    const [users, setUsers] = useState([])
    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const [currentPage,setCurrentPage] = useState(1);
    const [usersPerPage,setUsersPerPage] = useState(6);
    const [searchTerm, setSearchTerm] = useState('')
    const imageUrl = 'http://localhost:8000'

    useEffect(() => {
        const fetchUsers = async () => {
            await axios.post('http://127.0.0.1:8000/api/network-users/',{
                email: email
            }).then(
                response => {
                    setUsers(response.data)
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

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const firstRowUsers = currentUsers.slice(0,3)
    const secondRowUsers = currentUsers.slice(3,6)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const sendRequest = (e, emailReceiver) => {
        const getFriendRequest = async () => {
            await axios.post('http://127.0.0.1:8000/api/friend-request/',{
                sender : email,
                receiver: emailReceiver
            }).then(
                request => {
                    console.log(request.data)
                    e.target.innerHTML = 'Στάλθηκε'
                }
            ).catch(
                error => console.log(error)
            )
        }

        getFriendRequest()
    }

    return (
        <div>
            <NavBar />
            <div className="container-fluid card-container">
                <h2>Search your Friends</h2>
                <p>Web Job connects professional around the world.</p>
                <div className="input-container">
                    <input type="text" placeholder="Search here..." onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
                <div className="row network-row">
                    {firstRowUsers.filter((value) => {
                        if(searchTerm == ""){
                            return value
                        }else if(value.firstname.toLowerCase().includes(searchTerm.toLowerCase()) || value.lastname.toLowerCase().includes(searchTerm.toLowerCase())){
                            return value
                        }
                    }).map(user => 
                        <div className="col-4 network-col">
                            <div className="card">
                                <img src={imageUrl + user.image}/>
                                <h4>{user.firstname} {user.lastname}</h4>
                                <span>Google</span>
                                <h6>Senior Java Developer</h6>
                                <div className="network-profile-buttons">
                                    <button className="network-button-view"><Link to={{ pathname: '/user-page', state: { userEmail: user.email} }} className="sidebar-view-profile">Πληροφορίες</Link></button>
                                    <button className="network-button-send" onClick={(e) => sendRequest(e,user.email)}>Αίτημα Φιλίας</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="row network-row">
                    {secondRowUsers.filter((value) => {
                        if(searchTerm == ""){
                            return value
                        }else if(value.firstname.toLowerCase().includes(searchTerm.toLowerCase()) || value.lastname.toLowerCase().includes(searchTerm.toLowerCase())){
                            return value
                        }
                    }).map(user =>
                        <div className="col-4 network-col">
                            <div className="card">
                                <img src={imageUrl + user.image}/>
                                <h4>{user.firstname} {user.lastname}</h4>
                                <span>Google</span>
                                <h6>Senior Java Developer</h6>
                                <div className="network-profile-buttons">
                                    <button className="network-button-view"><Link to={{ pathname: '/user-page', state: { userEmail: user.email} }} className="sidebar-view-profile">Πληροφορίες</Link></button>
                                    <button className="network-button-send" onClick={(e) => sendRequest(e,user.email)}>Αίτημα Φιλίας</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Page usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate}/>

            </div>
            <Footer />
        </div>
    )
}

export default Network
