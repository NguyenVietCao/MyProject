import React, { useEffect, useState } from 'react';
import '../css/style.css'
import { getList } from '../service/ProductService';
import { Link } from 'react-router-dom';
function Home(props) {
    const [products, setProduct] = useState()

    const showProduct = async () => {
        const data = await getList()
        console.log(data);
        setProduct(data)
    }


    useEffect(() => {
        showProduct()
    }, [])



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
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={3} />
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
                    <div className='d-flex flex-wrap '>
                    {products?.map((product,index) => (

                        <div className=" gx-4 " key={index}>
                            <div
                                className="  wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <div className="product-item  m-2 ">
                                    <div className="position-relative">
                                        <img style={{ height: '400px' }} className="img-fluid" src={product?.images} alt="" />
                                        <div className="product-overlay">
                                            <Link
                                                className="btn btn-square btn-secondary rounded-circle m-1"
                                               to={`/detail/${product.id}`}
                                            >
                                                <i className="bi bi-link" />
                                            </Link>
                                            <Link
                                                className="btn btn-square btn-secondary rounded-circle m-1"
                                               to={"/login"}
                                            >
                                                <i className="bi bi-cart" />
                                            </Link>
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

                        </div>

                    ))}
</div>
                </div>
            </div>


        </>

    );
}

export default Home;