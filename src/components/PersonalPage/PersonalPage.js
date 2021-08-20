import React, {useState} from 'react'
import './PersonalPage.css'
import SideBar from './PersonalPackage/SideBar';
import CoverPage from './PersonalPackage/CoverPage'
import MainSection from './PersonalPackage/MainSection';
import NavBar from '../Navbar'

function PersonalPage() {
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

export default PersonalPage
