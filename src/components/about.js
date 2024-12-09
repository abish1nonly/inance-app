import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/responsive.css";
import "../assets/css/style.css.map";
import "bootstrap";
import "popper.js";
import "../assets/js/custom";

const about = () => {
  return (
    <div className="about-container">
        <div className="hero_area">
            <header className="header_section">
            <div className="header_top">
                <div className="container-fluid">
                <div className="contact_nav">
                    <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>
                        Call : +01 123455678990
                    </span>
                    </a>
                    <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>
                        Email : demo@gmail.com
                    </span>
                    </a>
                </div>
                </div>
            </div>
            <div className="header_bottom">
                <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <a className="navbar-brand" href="index.html">
                    <span>
                        Inance
                    </span>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">Home</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Service" className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Home" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                    </div>
                </nav>
                </div>
            </div>
            </header>
        </div>
        <section className="about_section layout_padding">
            <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6">
                <div className="detail-box">
                    <h2>
                    About us
                    </h2>
                    <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                    </p>
                    <a href="">
                    Read More
                    </a>
                </div>
                </div>
                <div className="col-lg-7 col-md-6">
                <div className="img-box">
                    <img src="images/about-img.jpg" alt=""/>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="info_section ">
            <div className="container">
            <h4>
                Get In Touch
            </h4>
            <div className="row">
                <div className="col-lg-10 mx-auto">
                <div className="info_items">
                    <div className="row">
                    <div className="col-md-4">
                        <a href="">
                        <div className="item ">
                            <div className="img-box ">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                            <p>
                            Lorem Ipsum is simply dummy text
                            </p>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="">
                        <div className="item ">
                            <div className="img-box ">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            </div>
                            <p>
                            +02 1234567890
                            </p>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="">
                        <div className="item ">
                            <div className="img-box">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <p>
                            demo@gmail.com
                            </p>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="social-box">
                <h4>
                    Follow Us
                </h4>
            <div className="box">
                <a href="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
                <a href="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
            </div>
        </section>
        <footer className="footer_section">
            <div className="container">
            <p>
                &copy; <span id="displayDateYear"></span> All Rights Reserved By
                <a href="https://html.design/">Free Html Templates</a>
            </p>
            </div>
        </footer>
        <script src="../assets/js/jquery-3.4.1.min.js"></script>
        <script src="../assets/js/bootstrap.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
        </script>
        <script src="../assets/js/custom.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
    </div>
  );
};

export default about;

