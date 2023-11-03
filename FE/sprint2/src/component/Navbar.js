import React from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
function Navbar(props) {
    return (
        <div>
            {/* Spinner Start */}

            {/* <div
                id="spinner"
                className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
            >
                <div
                    className="spinner-border text-primary"
                    role="status"
                    style={{ width: "3rem", height: "3rem" }}
                />
            </div> */}

         {/* Spinner End  */}


            {/* Topbar Start */}
            <div className="container-fluid bg-dark px-0">
                <div className="row g-0 d-none d-lg-flex">
                    <div className="col-lg-6 ps-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center text-light">
                            <span>Follow Us:</span>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end">
                        <div className="h-100 bg-secondary d-inline-flex align-items-center text-dark py-2 px-4">
                            <span className="me-2 fw-semi-bold"><i className="fa fa-phone-alt me-2"></i>Call Us:</span>
                            <span>+012 345 6789</span>
                        </div>
                    </div>
                </div>
            </div>
        {/* Topbar End  */}


            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
                <a href="index.html" className="navbar-brand d-flex align-items-center">
                    <h1 className="m-0">Milky</h1>
                </a>
                <button
                    type="button"
                    className="navbar-toggler me-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="index.html" className="nav-item nav-link">
                            Home
                        </a>
                        <a href="about.html" className="nav-item nav-link">
                            About
                        </a>
                        <a href="service.html" className="nav-item nav-link">
                            Services
                        </a>
                        <a href="product.html" className="nav-item nav-link">
                            Products
                        </a>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle active"
                                data-bs-toggle="dropdown"
                            >
                                Pages
                            </a>
                            <div className="dropdown-menu bg-light m-0">
                                <a href="gallery.html" className="dropdown-item">
                                    Gallery
                                </a>
                                <a href="feature.html" className="dropdown-item active">
                                    Features
                                </a>
                                <a href="team.html" className="dropdown-item">
                                    Our Team
                                </a>
                                <a href="testimonial.html" className="dropdown-item">
                                    Testimonial
                                </a>
                                <a href="404.html" className="dropdown-item">
                                    404 Page
                                </a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">
                            Contact
                        </a>
                    </div>
                    <div className="border-start ps-4 d-none d-lg-block">
                        <button type="button" className="btn btn-sm p-0">
                            <i className="fa fa-search" />
                        </button>
                    </div>
                </div>
            </nav>

          {/* Navbar End  */}
        </div>
    );
}

export default Navbar;