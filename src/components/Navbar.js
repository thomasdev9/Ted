import React,{useState} from 'react'
import './Navbar.css'
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import { Modal } from './Modal';
import {ModalSignUp} from './ModalSignUp'
import {Link} from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`


function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark p-md-3">
                <div className="container">
                    <a href="#" className="navbar-brand">Web Job</a>
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
                                <a href="#" className="nav-link text-white">Αρχικη Σελιδα</a>
                            </li>
                            <li className="nav-item">
                                <a href="#"><Link to="/network" className="nav-link text-white">Δικτυο</Link></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">Αγγελιες</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">Συζητησεις</a>
                            </li>
                            <li className="nav-item">
                                <a href="#"><Link to="/notifications" className="nav-link text-white">Ειδοποιησεις</Link></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">Προσωπικα Στοιχεια</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">Ρυθμισεις</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
