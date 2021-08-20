import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h3>Web Job</h3>
                            <ul className="contact-info">
                                <li>Phone: +30 6957634123</li>
                                <li>Address: Athens, Vizantiou 56</li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Categories</h5>
                            <ul>
                                <li><a href="#">Αρχική Σελίδα</a></li>
                                <li><a href="#">Δίκτυο</a></li>
                                <li><a href="#">Σελίδες</a></li>
                                <li><a href="#">Αγγελίες</a></li>
                                <li><a href="#">Συζητήσεις</a></li>
                                <li><a href="#">Ειδοποιήσεις</a></li>
                                <li><a href="#">Προσωπικά Στοιχεία</a></li>
                                <li><a href="#">Ρυθμίσεις</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Company</h5>
                            <ul>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Follow</h5>
                            <ul>
                                <li><i className="fa fa-facebook-square"></i></li>
                                <li><i className="fa fa-instagram"></i></li>
                                <li><i className="fa fa-twitter"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-copyrights">
                    <p className="copyrights">© Copyrights 2021 Web Job. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
