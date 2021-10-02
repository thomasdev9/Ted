import React, {useState, useEffect, useContext, useHistory} from 'react'
import './UserPage.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import {UserContext} from '../Contexts/UseContext'
import {Redirect, withRouter, Link} from 'react-router-dom'
import axios from 'axios'

function UserPage(props) {

    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const {userEmail} = props.location.state
    const [user, setUser] = useState([])
    const [userData, setUserData] = useState([])
    const imageUrl ='http://127.0.0.1:8000'
    console.log(userEmail)

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/user-data/',{
            email: userEmail
        })
        .then(
            data => {
                setUser(data.data[0])
            }
        )
        .catch(
            error => {
                console.log(error)
            }
        )

        axios.post('http://127.0.0.1:8000/api/get-data/',{
            email: userEmail
        })
        .then(
            data => {
                setUserData(data.data)
                console.log(data.data)
            }
        )
        .catch(
            error => {
                console.log(error)
            }
        )

    },[])

    return (
        <div>
            <Navbar />
            <div className="container-fluid user-container">
                <div className="row">
                    <div className="col-3 personal-data-wrapped">
                        <img src={imageUrl + user.image}/>
                        <div className="welcome-text">
                            <span>Hello, My name is</span>
                            <h1>{user.firstname} {user.lastname}</h1>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="user-information">
                            {
                                (userData.length > 0)
                                ?
                                <div className="package-information">
                                <div>
                                    <h4>Proffession:</h4>
                                    <p>{(userData[0].state_profession == true)
                                        ?userData[0].profession
                                        :'Private'}
                                    </p>
                                </div>
                                <div>
                                    <h4>Experience:</h4>
                                    <p>{(userData[0].state_experience == true)
                                        ?userData[0].professional_experience
                                        :'Private'}
                                    </p>
                                </div>
                                <div>
                                    <h4>Education:</h4>
                                    <p>{(userData[0].state_education == true)
                                        ?userData[0].education
                                        :'Private'}
                                    </p>
                                </div>
                                <div>
                                    <h4>Skills:</h4>
                                    <p>{(userData[0].state_skills == true)
                                        ?userData[0].skills
                                        :'Private'}
                                    </p>
                                </div>
                            </div>
                                    
                                :
                                <div className="package-information">
                                    <div>
                                        <h4>Proffesion:</h4>
                                        <p>Empty</p>
                                    </div>
                                    <div>
                                        <h4>Experience:</h4>
                                        <p>Empty</p>
                                    </div>
                                    <div>
                                        <h4>Education:</h4>
                                        <p>Empty</p>
                                    </div>
                                    <div>
                                        <h4>Skills:</h4>
                                        <p>Empty</p>
                                    </div>
                                </div>
                            }
                            <div className="button-div">
                                <button><Link to='/messages'>Στείλε Μήνυμα</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserPage
