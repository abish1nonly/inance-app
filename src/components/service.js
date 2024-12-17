import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/responsive.css";
import "../assets/css/style.css.map";
import "popper.js";
import { loadGapi } from "../assets/js/gapiConfig";
import "../assets/js/custom";

const service = () => {
  return (
    <div className="service-container">
        <div class="hero_area">
            <header class="header_section">
            <div class="header_top">
                <div class="container-fluid">
                <div class="contact_nav">
                    <a href="">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                        <span>
                            Call : +01 123455678990
                        </span>
                    </a>
                    <a href="">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                        <span>
                            Email : demo@gmail.com
                        </span>
                    </a>
                </div>
                </div>
            </div>
            <div class="header_bottom">
                <div class="container-fluid">
                <nav class="navbar navbar-expand-lg custom_nav-container ">
                    <a class="navbar-brand">
                        <Link to="/Home">
                            <span>
                                Inance
                            </span>
                        </Link>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class=""> </span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ">
                        <li class="nav-item ">
                            <a class="nav-link">
                                <Link to="/">
                                    <span>
                                        Home
                                    </span>
                                </Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                                <Link to="/About">
                                        About
                                </Link>
                            </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link">
                                <Link to="/Service">
                                        Services
                                </Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                                <Link to="/Contact">
                                        Contact Us
                                </Link>
                            </a>
                        </li>
                    </ul>
                    </div>
                </nav>
                </div>
            </div>
            </header>
        </div>
        <section class="service_section layout_padding">
            <div class="container ">
            <div class="heading_container heading_center">
                <h2> Our Services </h2>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-4 mx-auto">
                <div class="box ">
                    <div class="img-box">
                    <img src="./assets/images/s1.png" alt="" />
                    </div>
                    <div class="detail-box">
                    <h5>
                        Maintenance
                    </h5>
                    <p>
                        when looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal
                    </p>
                    </div>
                </div>
                </div>
                <div class="col-sm-6 col-md-4 mx-auto">
                <div class="box ">
                    <div class="img-box">
                    <img src="./assets/images/s2.png" alt="" />
                    </div>
                    <div class="detail-box">
                    <h5>
                        Electrical
                    </h5>
                    <p>
                        when looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal
                    </p>
                    </div>
                </div>
                </div>
                <div class="col-sm-6 col-md-4 mx-auto">
                <div class="box ">
                    <div class="img-box">
                    <img src="./assets/images/s3.png" alt="" />
                    </div>
                    <div class="detail-box">
                    <h5>
                        Plumbing
                    </h5>
                    <p>
                        when looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div class="btn-box">
                <a href="">
                View More
                </a>
            </div>
            </div>
        </section>
        <section class="info_section ">
            <div class="container">
            <h4>
                Get In Touch
            </h4>
            <div class="row">
                <div class="col-lg-10 mx-auto">
                <div class="info_items">
                    <div class="row">
                    <div class="col-md-4">
                        <a href="">
                        <div class="item ">
                            <div class="img-box ">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                            <p>
                            Lorem Ipsum is simply dummy text
                            </p>
                        </div>
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a href="">
                        <div class="item ">
                            <div class="img-box ">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            </div>
                            <p>
                            +02 1234567890
                            </p>
                        </div>
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a href="">
                        <div class="item ">
                            <div class="img-box">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
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
            <div class="social-box">
            <h4>
                Follow Us
            </h4>
            <div class="box">
                <a href="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                <i class="fa fa-youtube" aria-hidden="true"></i>
                </a>
                <a href="">
                <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
            </div>
        </section>
        <footer class="footer_section">
            <div class="container">
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

export default service;

