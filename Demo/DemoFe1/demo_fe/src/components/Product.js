import React, { useEffect, useState } from 'react';
import { getList, getListProduct, getProductById } from '../service/ProductService';
import { getListProductType } from '../service/ProductTypeService';
import { Link } from 'react-router-dom';
import { addCartDetail } from '../service/CartService';



function Product(props) {
    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    const [products, setProduct] = useState([])
    const [productType, setProductType] = useState([])
   

    const userName = localStorage.getItem("userName")
 

    const handleCart = async (id) => {
        const data = await addCartDetail(id, userName)
       

    }

    const showListProduct = async () => {
        const data = await getList()
        console.log(data);
        if (data) {
            setProduct(data)
        }
    }

    const showListProductType = async () => {
        const dataType = await getListProductType()
        console.log(dataType);
        setProductType(dataType)
    }

    useEffect(() => {
        showListProduct()
    }, [])

    return (
        <div>
            <div className='container-fluid text-center mx-auto wow fadeInUp'>

                <div className=" py-5 ">
                    <div className="ps-0 d-flex row">

                        <div className="menu col-3 d-block py-5 my-5 form-group  ">
                            <h4 className='bg-primary'>MENU</h4>
                            <div className='products'>ALLL PRODUCT</div>
                            <hr />
                            <div className='products'>NEW PRODUCT</div>
                            <hr />
                            <divp className='products'>PRODUCTS FOR CHILDREN</divp>
                            <hr />
                            <div className='products'>PRODUCTS FOR ELDERLY</div>
                        </div>
                        <div className="d-flex col-9 py-5 my-5 flex-wrap">{products.map((product, index) => (
                            <div
                                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                                data-wow-delay="0.1s" key={index}
                            >

                                <div className="product-item mb-3">
                                    <div className="position-relative">
                                        <img style={{ height: '200px' }} className="img-fluid" src={product.images} alt="" />
                                        <div className="product-overlay">
                                            <Link
                                                className="btn btn-square btn-secondary rounded-circle m-1"
                                                to={`/detail/${product.id}`}
                                            >
                                                <i className="bi bi-link" />
                                            </Link>
                                            <a
                                                className="btn btn-square btn-secondary rounded-circle m-1"
                                                onClick={()=>handleCart(product.id)}
                                                href=""
                                            >
                                                <i className="bi bi-cart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4">
                                        <a className="d-block h5" href="">
                                            {product.productName}
                                        </a>
                                        <span className="text-primary me-1">{vnd.format(product.price)}</span>
                                        {/* <span className="text-decoration-line-through">$29.00</span> */}
                                    </div>
                                </div>

                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;