import React, {useState, useContext, useEffect} from 'react'
import './Navbar.css'
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import { Modal } from './Modal';
import {ModalSignUp} from './ModalSignUp'
import {Link, Redirect} from 'react-router-dom'
import {UserContext} from './Contexts/UseContext'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

function Navbar() {

    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2

    if(!isAuth){
        return <Redirect to='/'/>
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark p-md-3">
                <div className="container-fluid navbar-container">
                    <a href="#" className="navbar-web-job"><Link className="navbar-brand" to='/'>Web Job</Link></a>
                    <button 
                        type="button" 
                        className="navbar-toggler" 
                        data-bs-target="#navbarNav"
                        data-bs-toggle="collapse"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Navbar Toggle"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#"><Link className="nav-link text-white" to='/personal'>Αρχικη Σελιδα</Link></a>
                            </li>
                            <li className="nav-item">
                                <a href="#"><Link to="/network" className="nav-link text-white">Δικτυο</Link></a>
                            </li>
                            <li className="nav-item">
                                <a href="#"><Link to="/jobs" className="nav-link text-white">Αγγελιες</Link></a>
                            </li>
                            <li className="nav-item">
                                <a href="#"><Link to='/messages' className="nav-link text-white">Συζητησεις</Link></a>
                            </li>
                            <li className="nav-item">
                                <a href="#"><Link to="/notifications" className="nav-link text-white">Ειδοποιησεις</Link></a>
                            </li>
                            <li className="nav-item">
                                <a href="#"><Link to='/data' className="nav-link text-white">Προσωπικα Στοιχεια</Link></a>
                            </li>
                            <li className="nav-item">
                                <a href="#"><Link to='/settings' className="nav-link text-white">Ρυθμισεις</Link></a>
                            </li>

                        </ul>
                    </div>
                    <div className="mx-auto"></div>
                    <a className="log-out" onClick={() => setIsAuth(false)}>Αποσύνδεση</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
