import React from 'react';


function About(props) {
    return (
        <div>
            <>
                {/* Page Header Start */}
                <div
                    className="container-fluid page-header py-5 mb-5 wow fadeIn"
                    data-wow-delay="0.1s"
                >
                    <div className="container text-center py-5">
                        <h1 className="display-3 text-white mb-4 animated slideInDown">
                            About Us
                        </h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Pages</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    About
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* Page Header End */}
                {/* About Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-end">
                            <div className="col-lg-6">
                                <div className="row g-2">
                                    <div
                                        className="col-6 position-relative wow fadeIn"
                                        data-wow-delay="0.7s"
                                    >
                                        <div className="about-experience bg-secondary rounded">
                                            <h1 className="display-1 mb-0">25</h1>
                                            <small className="fs-5 fw-bold">Years Experience</small>
                                        </div>
                                    </div>
                                    <div className="col-6 wow fadeIn" data-wow-delay="0.1s">
                                        <img className="img-fluid rounded" src="img/service-1.jpg" />
                                    </div>
                                    <div className="col-6 wow fadeIn" data-wow-delay="0.3s">
                                        <img className="img-fluid rounded" src="img/service-2.jpg" />
                                    </div>
                                    <div className="col-6 wow fadeIn" data-wow-delay="0.5s">
                                        <img className="img-fluid rounded" src="img/service-3.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <p className="section-title bg-white text-start text-primary pe-3">
                                    About Us
                                </p>
                                <h1 className="mb-4">Know About Our Dairy Farm &amp; Our History</h1>
                                <p className="mb-4">
                                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                                    lorem sit clita duo justo magna dolore erat amet
                                </p>
                                <div className="row g-5 pt-2 mb-5">
                                    <div className="col-sm-6">
                                        <img className="img-fluid mb-4" src="img/service.png" alt="" />
                                        <h5 className="mb-3">Dedicated Services</h5>
                                        <span>
                                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                                        </span>
                                    </div>
                                    <div className="col-sm-6">
                                        <img className="img-fluid mb-4" src="img/product.png" alt="" />
                                        <h5 className="mb-3">Organic Products</h5>
                                        <span>
                                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                                        </span>
                                    </div>
                                </div>
                                <a className="btn btn-secondary rounded-pill py-3 px-5" href="">
                                    Explore More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Banner Start */}
                <div
                    className="container-fluid banner my-5 py-5"
                    data-parallax="scroll"
                    data-image-src="https://img.freepik.com/free-vector/cow-with-black-spots-with-meadow-background-organic-fresh-milk_1268-15852.jpg"
                >
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                                <div className="row g-4 align-items-center">
                                    <div className="col-sm-4">
                                        <img
                                            className="img-fluid rounded"
                                            src="https://img.freepik.com/free-vector/cow-with-black-spots-with-meadow-background-organic-fresh-milk_1268-15852.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-sm-8">
                                        <h2 className="text-white mb-3">We Sell Best Dairy Products</h2>
                                        <p className="text-white mb-4">
                                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                                            justo magna dolore erat amet
                                        </p>
                                        <a className="btn btn-secondary rounded-pill py-2 px-4" href="">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="row g-4 align-items-center">
                                    <div className="col-sm-4">
                                        <img
                                            className="img-fluid rounded"
                                            src="https://img.freepik.com/free-vector/cow-with-black-spots-with-meadow-background-organic-fresh-milk_1268-15852.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-sm-8">
                                        <h2 className="text-white mb-3">
                                            We Deliver Fresh Mild Worldwide
                                        </h2>
                                        <p className="text-white mb-4">
                                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                                            justo magna dolore erat amet
                                        </p>
                                        <a className="btn btn-secondary rounded-pill py-2 px-4" href="">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner End */}
                {/* Team Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div
                            className="text-center mx-auto wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ maxWidth: 500 }}
                        >
                            <p className="section-title bg-white text-center text-primary px-3">
                                Our Team
                            </p>
                            <h1 className="mb-5">Experienced Team Members</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item rounded p-4">
                                    <img
                                        className="img-fluid rounded mb-4"
                                        src="img/team-1.jpg"
                                        alt=""
                                    />
                                    <h5>Adam Crew</h5>
                                    <p className="text-primary">Founder</p>
                                    <div className="d-flex justify-content-center">
                                        <a
                                            className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                                            href=""
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                                            href=""
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                                            href=""
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item rounded p-4">
                                    <img
                                        className="img-fluid rounded mb-4"
                                        src="img/team-2.jpg"
                                        alt=""
                                    />
                                    <h5>Doris Jordan</h5>
                                    <p className="text-primary">Veterinarian</p>
                                    <div className="d-flex justify-content-center">
                                        <a
                                            className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                                            href=""
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                                            href=""
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                                            href=""
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item rounded p-4">
                                    <img
                                        className="img-fluid rounded mb-4"
                                        src="img/team-3.jpg"
                                        alt=""
                                    />
                                    <h5>Jack Dawson</h5>
                                    <p className="text-primary">Farmer</p>
                                    <div className="d-flex justify-content-center">
                                        <a
                                            className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                                            href=""
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                                            href=""
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                                            href=""
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
                {/* Footer Start */}
                <div
                    className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn"
                    data-wow-delay="0.1s"
                >
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <h5 className="text-white mb-4">Our Office</h5>
                                <p className="mb-2">
                                    <i className="fa fa-map-marker-alt me-3" />
                                    123 Street, New York, USA
                                </p>
                                <p className="mb-2">
                                    <i className="fa fa-phone-alt me-3" />
                                    +012 345 67890
                                </p>
                                <p className="mb-2">
                                    <i className="fa fa-envelope me-3" />
                                    info@example.com
                                </p>
                                <div className="d-flex pt-3">
                                    <a
                                        className="btn btn-square btn-secondary rounded-circle me-2"
                                        href=""
                                    >
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a
                                        className="btn btn-square btn-secondary rounded-circle me-2"
                                        href=""
                                    >
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a
                                        className="btn btn-square btn-secondary rounded-circle me-2"
                                        href=""
                                    >
                                        <i className="fab fa-youtube" />
                                    </a>
                                    <a
                                        className="btn btn-square btn-secondary rounded-circle me-2"
                                        href=""
                                    >
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h5 className="text-white mb-4">Quick Links</h5>
                                <a className="btn btn-link" href="">
                                    About Us
                                </a>
                                <a className="btn btn-link" href="">
                                    Contact Us
                                </a>
                                <a className="btn btn-link" href="">
                                    Our Services
                                </a>
                                <a className="btn btn-link" href="">
                                    Terms &amp; Condition
                                </a>
                                <a className="btn btn-link" href="">
                                    Support
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h5 className="text-white mb-4">Business Hours</h5>
                                <p className="mb-1">Monday - Friday</p>
                                <h6 className="text-light">09:00 am - 07:00 pm</h6>
                                <p className="mb-1">Saturday</p>
                                <h6 className="text-light">09:00 am - 12:00 pm</h6>
                                <p className="mb-1">Sunday</p>
                                <h6 className="text-light">Closed</h6>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h5 className="text-white mb-4">Newsletter</h5>
                                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                <div className="position-relative w-100">
                                    <input
                                        className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                                        type="text"
                                        placeholder="Your email"
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2"
                                    >
                                        SignUp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
                {/* Copyright Start */}
                <div className="container-fluid bg-secondary text-body copyright py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                ©{" "}
                                <a className="fw-semi-bold" href="#">
                                    Your Site Name
                                </a>
                                , All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                                Designed By{" "}
                                <a className="fw-semi-bold" href="https://htmlcodex.com">
                                    HTML Codex
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright End */}
                {/* Back to Top */}
                <a
                    href="#"
                    className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
                >
                    <i className="bi bi-arrow-up" />
                </a>
            </>
 
        </div>
    );
}

export default About;