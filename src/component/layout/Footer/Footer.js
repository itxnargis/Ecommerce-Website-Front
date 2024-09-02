import React from "react";
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-nav">
                <div className="footer-container">
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Popular Categories</h2>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Fashion</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Electronic</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Cosmetic</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Health</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Watches</a>
                        </li>
                    </ul>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Products</h2>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Prices drop</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">New products</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Best sales</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Contact us</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Sitemap</a>
                        </li>
                    </ul>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Our Company</h2>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Delivery</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Legal Notice</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Terms and conditions</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">About us</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Secure payment</a>
                        </li>
                    </ul>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Services</h2>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Prices drop</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">New products</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Best sales</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Contact us</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Sitemap</a>
                        </li>
                    </ul>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Contact</h2>
                        </li>
                        <li className="footer-nav-item flex">
                            <div className="icon-box">
                                <IoLocationOutline />
                            </div>
                            <address className="content">
                                Faridabad, Haryana, Pin Code - 121003
                            </address>
                        </li>
                        <li className="footer-nav-item flex">
                            <div className="icon-box">
                                <IoMailOutline />
                            </div>
                            <a href="mailto:itxnargiskhatun@gmail.com" title="My gmail account"
                                aria-label="Gmail-icon" className="footer-nav-link link">itxnargiskhatun@gmail.com
                            </a>
                        </li>
                    </ul>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Follow Me</h2>
                        </li>
                        <li>
                            <ul className="social-link">
                                <li className="footer-nav-item">
                                    <a href="https://github.com/itxnargis" title="Connect to github"
                                        aria-label="Github-icon" className="footer-nav-link">
                                        <AiFillGithub />
                                    </a>
                                </li>
                                <li className="footer-nav-item">
                                    <a href="https://x.com/81283nargis?s=09" title="My personal twitter account"
                                        aria-label="Twitter-icon" className="footer-nav-link">
                                        <AiOutlineTwitter />
                                    </a>
                                </li>
                                <li className="footer-nav-item">
                                    <a href="https://www.linkedin.com/in/nargis-khatun-4008ab2a9/"
                                        title="My linkedin account" aria-label="Linkedin-icon" className="footer-nav-link">
                                        <AiFillLinkedin />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-container">
                    <div className="copyright">
                        <p>
                            Copyright &copy; <a href="#">Trendz</a> all rights reserved.
                        </p>
                        <p>Designed by <span><a href="https://itxnargis.github.io/personal-portfolio/" title="my-personal-portfolio" target="_blank"
                            className="personal-info">
                            Nargis Khatun                                    </a></span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;