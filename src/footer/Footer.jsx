import React from 'react';
import "../footer/Footer.css";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__info">
                        <div className="footer__brand">
                            <h1>MORENT</h1>
                            <p>Our vision is to provide convenience and help increase your sales business.</p>
                        </div>
                        <div className="footer__links">
                            <ul>
                                <li className="section-title">About</li>
                                <li>How it works</li>
                                <li>Featured</li>
                                <li>Partnership</li>
                                <li>Business Relation</li>
                            </ul>
                            <ul>
                                <li className="section-title">Community</li>
                                <li>Events</li>
                                <li>Blog</li>
                                <li>Podcast</li>
                                <li>Invite a friend</li>
                            </ul>
                            <ul>
                                <li className="section-title">Support</li>
                                <li>Help Center</li>
                                <li>FAQs</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <p>©2022 MORENT. All rights reserved</p>
                        <div className="privacy-links">
                            <p>Privacy & Policy</p>
                            <p>Terms & Condition</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
