import React from 'react'
import './Settings.css'
import Navbar from '../Navbar'

function Settings() {
    return (
        <div>
            <Navbar />
            <div className="container-fluid settings-container">
                <form>
                    <h1>Settings</h1>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Change</button>
                </form>
            </div>
        </div>
    )
}

export default Settings
