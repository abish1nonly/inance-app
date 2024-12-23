import React from "react";
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/responsive.css";
import "../assets/css/style.css.map";
import "bootstrap";
import "popper.js";
import "../assets/js/custom";

const contact = () => {
  return (
    <div className="contact-container">
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
                    <a class="navbar-brand" href="index.html">
                    <span>
                        Inance
                    </span>
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class=""> </span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ">
                        <li class="nav-item ">
                        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="about.html"> About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="service.html">Services</a>
                        </li>
                        <li class="nav-item active">
                        <a class="nav-link" href="contact.html">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                </nav>
                </div>
            </div>
            </header>
        </div>
        <section class="contact_section layout_padding">
            <div class="container">
            <div class="heading_container">
                <h2>
                Contact Us
                </h2>
            </div>
            <div class="row">
                <div class="col-md-6">
                <form action="">
                    <div>
                    <input type="text" placeholder="Name" />
                    </div>
                    <div>
                    <input type="text" placeholder="Phone Number" />
                    </div>
                    <div>
                    <input type="email" placeholder="Email" />
                    </div>
                    <div>
                    <input type="text" class="message-box" placeholder="Message" />
                    </div>
                    <div class="d-flex ">
                    <button>
                        SEND
                    </button>
                    </div>
                </form>
                </div>
                <div class="col-md-6">
                <div class="map_container">
                    <div class="map">
                    <div id="googleMap" style="width:100%;height:100%;"></div>
                    </div>
                </div>
                </div>
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

export default contact;

