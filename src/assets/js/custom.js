import $ from 'jquery';
import 'owl.carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import 'bootstrap';

// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
            '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
});

/** Google Maps Initialization **/
window.myMap = function () {
    if (window.google && window.google.maps) {
        const mapElement = document.getElementById("googleMap");
        if (mapElement) {
            const mapProp = {
                center: new window.google.maps.LatLng(40.712775, -74.005973),
                zoom: 18,
            };
            new window.google.maps.Map(mapElement, mapProp);
        } else {
            console.error("Element with id 'googleMap' not found.");
        }
    } else {
        console.error("Google Maps API not loaded.");
    }
};