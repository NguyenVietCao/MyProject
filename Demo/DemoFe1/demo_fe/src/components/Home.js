import React from 'react';
import '../css/style.css'
function Home(props) {
    return (
   
        <>  
         
            <div
                id="carouselExampleIndicators"
                className="carousel slide py-5"
                data-ride="carousel"
            
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={0}
                        className="active"
                    />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1}  />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={3}  />
                </ol>
                <div className="carousel-inner py-5">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://bizweb.dktcdn.net/100/416/540/themes/839121/assets/slide-img3.jpg?1698832020532" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://bizweb.dktcdn.net/100/416/540/themes/839121/assets/slide-img6.jpg?1698832020532" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://bizweb.dktcdn.net/100/416/540/themes/839121/assets/slide-img8.jpg?1698832020532" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://bizweb.dktcdn.net/100/416/540/themes/839121/assets/slide-img9.jpg?1698832020532" alt="Third slide" />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

                   
{/* product */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <p className="section-title bg-white text-center text-primary px-3">
                            Our Products
                        </p>
                        <h1 className="mb-5">Our Dairy Products For Healthy Living</h1>
                    </div>
                    <div className="row gx-4">
                        <div
                            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="product-item">
                                <div className="position-relative">
                                    <img style={{height:'400px'}} className="img-fluid" src="https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01743_7e1b36f295.JPG" alt="" />
                                    <div className="product-overlay">
                                        <a
                                            className="btn btn-square btn-secondary rounded-circle m-1"
                                            href=""
                                        >
                                            <i className="bi bi-link" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-secondary rounded-circle m-1"
                                            href=""
                                        >
                                            <i className="bi bi-cart" />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5" href="">
                                        Ensure Gold
                                    </a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-decoration-line-through">$29.00</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div className="product-item">
                                <div className="position-relative">
                                    <img style={{ height: '400px' }} className="img-fluid" src="https://cdn1.concung.com/2023/04/42917-99875-large_mobile/sua-tuoi-tiet-trung-co-duong-vinamilk-180ml-loc-4-hop.png" alt="" />
                                    <div className="product-overlay">
                                        <a
                                            className="btn btn-square btn-secondary rounded-circle m-1"
                                            href=""
                                        >
                                            <i className="bi bi-link" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-secondary rounded-circle m-1"
                                            href=""
                                        >
                                            <i className="bi bi-cart" />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5" href="">
                                        Fresh Meat
                                    </a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-decoration-line-through">$29.00</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div className="product-item">
                                <div className="position-relative">
                                    <img style={{ height: '400px' }} className="img-fluid" src="https://cafefcdn.com/zoom/700_438/203337114487263232/2022/3/1/photo1646153510505-16461535106081840212175.jpeg" alt="" />
                                    <div className="product-overlay">
                                        <a
                                            className="btn btn-square btn-secondary rounded-circle m-1"
                                            href=""
                                        >
                                            <i className="bi bi-link" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-secondary rounded-circle m-1"
                                            href=""
                                        >
                                            <i className="bi bi-cart" />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5" href="">
                                        Dairy Products
                                    </a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-decoration-line-through">$29.00</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                            data-wow-delay="0.7s"
                        >
                            <div className="product-item">
                                <div className="position-relative">
                                    <img className="img-fluid " src="https://suaphuocthai.com/uploads/source/enfamil-a/sua-hoang-gia/z3499684304874-1dad715bd240dea1d2d760489a04b0f3.jpg" alt="" style={{height:'400px'}}/>
                                    <div className="product-overlay">
                                        <a
                                            className="btn btn-square btn-secondary rounded-circle m-1"
                                            href=""
                                        >
                                            <i className="bi bi-link" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-secondary rounded-circle m-1"
                                            href=""
                                        >
                                            <i className="bi bi-cart" />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5" href="">
                                        Organic Food
                                    </a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-decoration-line-through">$29.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            </>

    );
}

export default Home;