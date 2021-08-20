import React from 'react'
import './CoverPage.css'
import ImageFriend_1 from './images/friend_1.jpg'
import ImageFriend_2 from './images/friend_2.jpg'
import ImageFriend_3 from './images/friend_3.jpg'
import ImageFriend_4 from './images/friend_4.jpg'

function CoverPage() {
    return (
        <div>
            <section className="container-cover-page">
                <div className="card-job">
                    <p>Job <span>2 September 2020</span></p>
                    <h6>Web Designer</h6>
                    <h6 className="job-brand">Google</h6>
                    <div className="card-job-info">
                        <img src={ImageFriend_1}/>
                        <div className="card-job-publish">
                            <p>Employer</p>
                            <h6>Jim Brown</h6>
                        </div>
                    </div>
                </div>
                <div className="card-job">
                    <p>Job <span>2 September 2020</span></p>
                    <h6>Web Developer</h6>
                    <h6 className="job-brand">Google</h6>
                    <div className="card-job-info">
                        <img src={ImageFriend_2}/>
                        <div className="card-job-publish">
                            <p>Employer</p>
                            <h6>Jim Brown</h6>
                        </div>
                    </div>
                </div>
                <div className="card-job">
                    <p>Job <span>2 September 2020</span></p>
                    <h6>Project Manager</h6>
                    <h6 className="job-brand">Google</h6>
                    <div className="card-job-info">
                        <img src={ImageFriend_3}/>
                        <div className="card-job-publish">
                            <p>Employer</p>
                            <h6>Jim Brown</h6>
                        </div>
                    </div>
                </div>
                <div className="card-job">
                    <p>Job <span>2 September 2020</span></p>
                    <h6>Accountant</h6>
                    <h6 className="job-brand">Google</h6>
                    <div className="card-job-info">
                        <img src={ImageFriend_4}/>
                        <div className="card-job-publish">
                            <p>Employer</p>
                            <h6>Jim Brown</h6>
                        </div>
                    </div>
                </div>
                <div className="card-job">
                    <p>Job <span>2 September 2020</span></p>
                    <h6>Psycologist</h6>
                    <h6 className="job-brand">Google</h6>
                    <div className="card-job-info">
                        <img src={ImageFriend_1}/>
                        <div className="card-job-publish">
                            <p>Employer</p>
                            <h6>Jim Brown</h6>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default CoverPage
