import React from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/responsive.css";
import "../assets/css/style.css.map";
import "bootstrap";
import "popper.js";
import "../assets/js/custom";

const About = () => {
    const navigate = useNavigate();
    const { lang } = useParams(); // Get the current language from the URL
    const [language, setLanguage] = useState(lang || "en"); // Fallback to 'en' if no lang is specified
    const [isExpanded, setIsExpanded] = useState(false);
    

  const handleExpandClick = () => {
    setIsExpanded((prev) => !prev); // Toggle the expanded state
  };
  const handleLanguageToggle = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage); 
    navigate(`/${newLanguage}/About`); 
  };

  // Translations for UI text
  const translations = {
    en: {
        Inance:"Inance",
        home: 'Home',
            about: 'About',
            services: 'Services',
            contact: 'Contact',
            welcome: 'Welcome to Our Website',
            description: 'We offer the best solutions tailored to your needs.',
            learnMore: 'Learn More',
            lang1: "English",
            lang2: "Arabic",
            call: "Call",
            email: "Email",
            contactUs: "Contact Us",
            repairAndMaintenance1: "Repair and",
            repairAndMaintenance2: "Maintenance",
            repairAndMaintenance3: "Services",
            loremText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.",
            repair:"Repair",
            improve:"Improve",
            maintain:"Maintain",
            aboutUs:"About Us",
            aboutDesc:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised",
            readMore:"Read More",
            detailb1:"We Provide Professional",
            detailb2:"Home Services",
            detaildesc:"randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly",
            ourServices:"Our Services",
            m1:"Maintencance",
            m2:"when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
            e1:"Electrical",
            e2:"when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
            p1:"Plumbing",
            p2:"when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
            viewMore:"View More",
            contactUs:"Contact Us",
            corouseltit:"What Our Clients Say",
            cli_name:"Jorch morik",
            cli_mess:"chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum",
            name:"Name",
            phone:"Phone Number",
            message: "Message",
            send: "send",
            getintouch:"Get In Touch",
            gti1:"Lorem Ipsum is simply dummy text",
            followUs:"Follow Us",
            copyright:"© All Rights Reserved ByFree Html Templates"
      },
      ar: {
        inance:"بينانس",
        home: 'الرئيسية',
            about: 'معلومات عنا',
            services: 'الخدمات',
            contact: 'اتصل بنا',
            welcome: 'مرحبًا بكم في موقعنا',
            description: 'نقدم أفضل الحلول المصممة خصيصًا لاحتياجاتك.',
            learnMore: 'أعرف أكثر',
            lang1: "إنجليزي",
            lang2: "عربي",
            call: "اتصال",
            email: "بريد إلكتروني",
            contactUs: "اتصل بنا",
            corouseltit:"ماذا يقول عملاؤنا",
            cli_name:"جورش موريك",
            cli_mess:"قطع حسب الضرورة، مما يجعل هذا المولد الحقيقي الأول على شبكة الإنترنت. يستخدم قاموسًا يضم أكثر من 200 كلمة لاتينية، بالإضافة إلى مجموعة من هياكل الجمل النموذجية، لإنشاء لوريم إيبسوم",
            repairAndMaintenance1: "إصلاح و",
            repairAndMaintenance2: "صيانة",
            repairAndMaintenance3:"خدمات",
            loremText: "الشركة نفسها هي شركة ناجحة جدا. من ينال لذة هذه الأشياء. إن المشاكل التي يقال لنا غالبًا قد تم إنقاذها، والأوقات عادلة، حتى نتمكن من حلها هنا، وستؤدي مرونة الحاضر إلى النعيم، ويتم تفريق الخطأ.",
            repair:"بصلح",
            improve:"يحسن",
            maintain:"يحافظ على",
            aboutUs:"معلومات عنا",
            aboutDesc:"هناك العديد من الأشكال المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية قد عانت من التعديل بشكل ما، عن طريق حقن الفكاهة، أو بشكل عشوائيهناك العديد من الأشكال المتوفرة لنصوص لوريم إيبسوم، ولكن الأغلبية تعرضت للتعديل بشكل ما، عن طريق حقن الفكاهة ، أو عشوائية",
            readMore:"اقرأ المزيد",
            detailb1:"نحن نقدم المهنية",
            detailb2:"خدمات منزلية",
            detaildesc:"كلمات عشوائية لا تبدو قابلة للتصديق ولو قليلاً. إذا كنت ستستخدم فقرة من نص لوريم إيبسوم، فيجب أن تتأكد من عدم وجود أي شيء محرج مخفي في منتصف النص. جميع الكلمات العشوائية التي لا تبدو ولو قليلاً",
            ourServices:"خدماتنا",
            m1:"صيانة",
            m2:"عند النظر إلى تخطيطه. المغزى من استخدام لوريم إيبسوم هو أنه يحتوي على نسبة عادية إلى حد ما",
            e1:"كهربائي",
            e2:"عند النظر إلى تخطيطه. المغزى من استخدام لوريم إيبسوم هو أنه يحتوي على نسبة عادية إلى حد ما",
            p1:"السباكة",
            p2:"عند النظر إلى تخطيطه. المغزى من استخدام لوريم إيبسوم هو أنه يحتوي على نسبة عادية إلى حد ما",
            viewMore:"عرض المزيد",
            contactUs:"اتصل بنا",
            name:"اسم",
            phone:"رقم التليفون",
            message: "رسالة",
            send: "يرسل",
            getintouch:"تواصل معنا",
            gti1:"لوريم إيبسوم هو ببساطة نص وهمي",
            followUs:"تابعنا",
            copyright:"جميع الحقوق محفوظة بواسطة"
      },
  };
  const texts = translations[language] || translations.en;
  return (
    <div className={`about-container ${language === "ar" ? "rtl" : "ltr"}`}>
        <div className="hero_area">
            <header className="header_section">
            <div className="header_top">
                <div className="container-fluid">
                    <div className="contact_nav">
                        <a href="">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span>
                                {texts.call} : +01 123455678990
                            </span>
                        </a>
                        <a href="">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <span>
                                {texts.email} : demo@gmail.com
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="header_bottom">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="index.html">
                        <span>{texts.inance}</span>
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link to={`/${language}`} className="nav-link">{texts.home}<span className="sr-only">{texts.home}</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={`/${language}/about`} className="nav-link">{texts.about}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/${language}/services`} className="nav-link">{texts.services}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/${language}/contact`} className="nav-link">{texts.contact}</Link>
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
                    {texts.aboutUs}
                    </h2>
                    <p>{texts.aboutDesc}</p>
                    <a href="">
                    {texts.readMore}
                    </a>
                </div>
                </div>
                <div className="col-lg-7 col-md-6">
                <div className="img-box">
                    <img src="./assets/images/about-img.jpg" alt=""/>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="info_section ">
        <div className="container">
        <h4>
            {texts.getintouch}
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
                        {texts.gti1}
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
            {texts.followUs}
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
                &copy; <span id="displayDateYear"></span> {texts.copyright}
                <a href="https://html.design/"> Free Html Templates</a>
            </p>
            </div>
        </footer>
        <div className={`lang-switcher ${isExpanded ? "expanded" : ""}`}>
            <button className="expand-btn" onClick={handleExpandClick}>
                <a><i class="fa fa-cog" aria-hidden="true"></i></a>
            </button>
            <div className="lang-switch-container">
            <span>{texts.lang1}</span>
            <input
              type="checkbox"
              id="languageSwitch"
              name="language-switch"
              onChange={handleLanguageToggle}
              checked={language === "ar"}
            />
            <label htmlFor="languageSwitch"></label>
            <span>{texts.lang2}</span>
            </div>
        </div>
        <script src="../assets/js/jquery-3.4.1.min.js"></script>
        <script src="../assets/js/bootstrap.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
        </script>
        <script src="../assets/js/custom.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
    </div>
  );
};

export default About;

