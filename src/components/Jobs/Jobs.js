import React,{useState} from 'react'
import './Jobs.css'
import Hero from './hero/Hero'
import NavBar from '../Navbar'
import Brand_3 from './images/brand_3.jpg'
import Brand_1 from './images/mc.jpg'
import Brand_2 from './images/ibm.png'
import Brand_4 from './images/tesla.jpg'

function Jobs() {

    var title = '';
    var brand='';
    var location = '';
    var desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
    var name = 'Thomas';
    var date = '';
    var image;
    var footer;

    const jobHandle = (e) => {
        const jobBody = e.currentTarget;
        const jobContainerImage = jobBody.children[0].children[0].children[0]; 
        const jobContainer = jobBody.children[0].children[0].children[1];
        image = jobContainerImage.children[0].src;
        title = jobContainer.children[0].innerText;
        brand = jobContainer.children[1].innerText;
        location = jobContainer.children[2].innerText;
        footer = jobContainer.children[3];
        date = footer.children[0].innerText;
        const titleJob = document.querySelector('.job-display h3');
        const brandJob = document.querySelector('.job-display h4');
        const locationJob = document.querySelector('.job-display p');
        const descJob = document.querySelector('.job-display .desc');
        const dateJob = document.querySelector('.job-display span');
        const imageJob = document.querySelector('.job-display img');
        titleJob.innerText = title;
        brandJob.innerText = brand;
        locationJob.innerText = location;
        descJob.innerText = desc;
        dateJob.innerText = date;
        imageJob.src = image;
    }

    return (
        <div>
            <NavBar />
            <Hero />
            <div className="container-fluid container-job">
                <div className="row">
                    <div className="col-6">
                        <h6>Search for job? You are at the right place.</h6>
                        <p>52 Results of Jobs</p>
                        <div className="job-body" onClick={e => jobHandle(e)}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        <img src={Brand_3}/>
                                    </div>
                                    <div className="col-10">
                                        <h6>Digital Marketing</h6>
                                        <p className="job-brand">Coca-cola</p>
                                        <p className="job-location">Athens, Attiki, Greece</p>
                                        <div className="job-footer">
                                            <span>2 weeks ago</span>
                                            <button>Apply Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="job-body" onClick={e => jobHandle(e)}>
                            <div className="container">
                                    <div className="row">
                                        <div className="col-2">
                                            <img src={Brand_2}/>
                                        </div>
                                        <div className="col-10">
                                            <h6>Senior Web Developer</h6>
                                            <p className="job-brand">IBM</p>
                                            <p className="job-location">Athens, Attiki, Greece</p>
                                            <div className="job-footer">
                                                <span>5 weeks ago</span>
                                                <button>Apply Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="job-body" onClick={e => jobHandle(e)}>
                            <div className="container">
                                    <div className="row">
                                        <div className="col-2">
                                            <img src={Brand_1}/>
                                        </div>
                                        <div className="col-10">
                                            <h6>Delivery</h6>
                                            <p className="job-brand">MC Donald's</p>
                                            <p className="job-location">Athens, Attiki, Greece</p>
                                            <div className="job-footer">
                                                <span>8 weeks ago</span>
                                                <button>Apply Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="job-body" onClick={e => jobHandle(e)}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        <img src={Brand_4}/>
                                    </div>
                                    <div className="col-10">
                                        <h6>Machine Learning Specialist</h6>
                                        <p className="job-brand">Tesla</p>
                                        <p className="job-location">Athens, Attiki, Greece</p>
                                        <div className="job-footer">
                                            <span>2 weeks ago</span>
                                            <button>Apply Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 job-display">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">
                                    <img src={Brand_3}/>
                                </div>
                                <div className="col-10">
                                    <h3>Digital Marketing</h3>
                                    <h4>Coca-cola</h4>
                                    <p className="location">Athens, Attiki, Greece</p>
                                    <span>2 weeks ago</span>
                                    <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <button>Apply Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs
