import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-dark mt-5">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a>Web design</a></li>
                                    <li><a>Development</a></li>
                                    <li><a>Hosting</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a >Company</a></li>
                                    <li><a >Team</a></li>
                                    <li><a>Careers</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>Travio</h3>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                            </div>
                            <div className="col item social"><a ><i className="fab fa-facebook-f"></i></a><a href="#"><i className="fab fa-twitter"></i></a><a href="#"><i className="fab fa-snapchat-ghost"></i></a><a href="#"><i className="fab fa-instagram"></i></a></div>
                        </div>
                        <p className="copyright">Medcity © 2021</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;