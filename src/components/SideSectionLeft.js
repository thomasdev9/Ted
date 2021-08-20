import React from 'react'
import './SideSectionLeft.css'
import Image from './images/tech.jpg'

function SideSectionLeft() {
    return (
        <div>
            <section className="side-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 side-img">
                            <img src={Image} />
                        </div>
                        <div className="col-6 side-text">
                            <h2>Amazing Platform with perfect User Experience</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SideSectionLeft
