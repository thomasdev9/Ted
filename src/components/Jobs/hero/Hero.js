import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <div>
            <section>
                <div className="container-fluid job-hero-container">
                    <div className="row">
                        <div className="col-6">
                            <span>Premium Platform</span>
                            <h1>Make Job Finding<br/> Easier with<br/> Web Job</h1>
                        </div>
                        <div className="col-6 job-form">
                            <h3>Post New Job</h3>
                            <form>
                                <input type="text" placeholder="Job Title"/>
                                <input type="text" placeholder="Brand"/>
                                <input type="text" placeholder="Location"/>
                                <div className="job-image">
                                    <label for="img">Select image: &nbsp;</label>
                                    <input type="file" id="img" name="img" accept="image/*" />
                                </div>
                                <button>Post</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
