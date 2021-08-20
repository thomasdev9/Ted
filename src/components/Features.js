import React from 'react'
import './Features.css'

function Features() {
    return (
        <div>
            <section className="features-section">
                <div className="container">
                    <div className="row">
                        <div className="col-4 feature">
                            <i className="material-icons-outlined">explore</i>
                            <h3>Explore</h3>
                            <p>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </p>
                        </div>
                        <div className="col-4 feature">
                            <i className="material-icons-outlined">task_alt</i>
                            <h3>Task Alt</h3>
                            <p>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </p>
                        </div>
                        <div className="col-4 feature">
                            <i className="material-icons-outlined">schedule</i>
                            <h3>Schedule</h3>
                            <p>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
