import React,{useState} from 'react'
import './Hero.css'
import { Modal } from './Modal';
import {ModalSignUp} from './ModalSignUp'

function Hero() {

    const [showModal,setShowModal] = useState(false)
    const [showSignUp,setSignUp] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const openSignUp = () => {
        setSignUp(prev => !prev)
    }

    return (
        <div>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <ModalSignUp showSignUp={showSignUp} setSignUp={setSignUp} />
            <section className="hero">
                <h1 className="hero-title">The #1 Best platform for professional networking</h1>
                <p className="hero-text">A high-performance employment-oriented online service that enables communication between job seekers and employers.</p>
                <div className="buttons-container">
                    <button className="button-login-hero" onClick={openModal}>Login</button>
                    <button className="button-sign-up-hero" onClick={openSignUp}>Sign Up</button>
                </div>
            </section>
        </div>
    )
}

export default Hero
