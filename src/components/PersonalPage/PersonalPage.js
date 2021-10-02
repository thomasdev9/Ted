import React, {useState, useContext} from 'react'
import './PersonalPage.css'
import SideBar from './PersonalPackage/SideBar';
import CoverPage from './PersonalPackage/CoverPage'
import MainSection from './PersonalPackage/MainSection';
import NavBar from '../Navbar'
import {withRouter, Redirect} from 'react-router-dom'
import { UserContext } from '../Contexts/UseContext';
import Footer from '../Footer';

function PersonalPage() {

    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2

    if(!isAuth){
        return <Redirect to='/'/>
    }
    
    return (
        <div>
            <NavBar />
            <CoverPage />
            <div className="container-fluid">
                <div className="row">
                <div className="col-3">
                    <SideBar />
                </div>
                <div className="col-9">
                    <MainSection />
                </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(PersonalPage);
