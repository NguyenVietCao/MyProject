import React from 'react';
import '../css/style.css'
function Product(props) {
    return (
        <div className='row container-fluid text-center mx-auto wow fadeInUp'>
         

            <div className=" py-5 ">
                <div className="ps-0 d-flex">
                  
                    <div className="menu col-2 d-block py-5 my-5 form-group  ">
                        <h4 className='bg-primary'>MENU</h4>
                        <div className='products'>ALLL PRODUCT</div>
                        <hr/>
                        <div className='products'>NEW PRODUCT</div>
                        <hr />
                        <divp className='products'>PRODUCTS FOR CHILDREN</divp>
                        <hr />
                        <div className='products'>PRODUCTS FOR ELDERLY</div>
                    </div>
                    <div className=" col-9 d-flex py-5 my-5">
                        <div
                            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="product-item">
                                <div className="position-relative">
                                    <img style={{ height: '200px' }} className="img-fluid" src="https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01743_7e1b36f295.JPG" alt="" />
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
                                    <img style={{ height: '200px' }} className="img-fluid" src="https://cdn1.concung.com/2023/04/42917-99875-large_mobile/sua-tuoi-tiet-trung-co-duong-vinamilk-180ml-loc-4-hop.png" alt="" />
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
                                    <img style={{ height: '200px' }} className="img-fluid" src="https://cafefcdn.com/zoom/700_438/203337114487263232/2022/3/1/photo1646153510505-16461535106081840212175.jpeg" alt="" />
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
                                    <img className="img-fluid " src="https://suaphuocthai.com/uploads/source/enfamil-a/sua-hoang-gia/z3499684304874-1dad715bd240dea1d2d760489a04b0f3.jpg" alt="" style={{ height: '200px' }} />
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
        </div>
    );
}

export default Product;