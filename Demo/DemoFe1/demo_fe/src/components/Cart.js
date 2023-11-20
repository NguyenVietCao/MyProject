import React, { useEffect, useState } from 'react';
import { getCartDetail } from '../service/CartService';

function Cart(props) {
    const [quantity,setQuantity] = useState()
    const [carts, setCart] = useState([]);
    const idUser = localStorage.getItem('id')
    console.log(idUser);
    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity-1)
        }
    }
    const increaseQuantity = () => {
        setQuantity(quantity +1)
    }
    const resetQuantity = () => {
        setQuantity(defaultQuantity);
    };

    const showCartDetail = async () => {
        const data = await getCartDetail(idUser)
        setCart(data.data)
    }
    useEffect(() => {
    showCartDetail()
    }, [idUser])
    if (!carts) {
        return null
    }

    return (
        <div>
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - 2 items</h5>
                                </div>
                                <div className="card-body">
                                    {/* Single item */}
                                    {carts?.map((cart,index) => (
                                        <div className="row" key={index}>
                                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                {/* Image */}
                                                <div
                                                    className="bg-image hover-overlay hover-zoom ripple rounded"
                                                    data-mdb-ripple-color="light"
                                                >
                                                    <img
                                                        src={cart.products.images}
                                                        className="w-100"
                                                        alt="Blue Jeans Jacket"
                                                    />
                                                    <a href="#!">
                                                        <div
                                                            className="mask"
                                                            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                                                        />
                                                    </a>
                                                </div>
                                                {/* Image */}
                                            </div>
                                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                {/* Data */}
                                                <p>
                                                    <strong>{cart.products.productName}</strong>
                                                </p>
                                                <p>Dung lượng: {cart.products.capacity}</p>
                                                <p>Đơn vị: {cart.products.unit}</p>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-sm me-1 mb-2"
                                                    data-mdb-toggle="tooltip"
                                                    title="Remove item"
                                                >
                                                    <i className="fas fa-trash" />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-sm mb-2"
                                                    data-mdb-toggle="tooltip"
                                                    title="Move to the wish list"
                                                >
                                                    <i className="fas fa-heart" />
                                                </button>
                                                {/* Data */}
                                            </div>
                                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                {/* Quantity */}
                                                <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                                                    <button
                                                        className="btn btn-primary px-3 me-2"
                                                        onClick={decreaseQuantity}
                                                    >
                                                        <i className="fas fa-minus" />
                                                    </button>
                                                    <div className="form-outline">
                                                        <input
                                                            id="form1"
                                                            min={0}
                                                            name="quantity"
                                                            value={quantity}
                                                            defaultValue={1}
                                                            type="number"
                                                            className="form-control"
                                                        />
                                                        <label className="form-label" htmlFor="form1">
                                                            Quantity
                                                        </label>
                                                    </div>
                                                    <button
                                                        className="btn btn-primary px-3 ms-2"
                                                        onClick={increaseQuantity}
                                                    >
                                                        <i className="fas fa-plus" />
                                                    </button>
                                                </div>
                                                {/* Quantity */}
                                                {/* Price */}
                                                <p className="text-start text-md-center">
                                                    <strong>648.000 VND</strong>
                                                </p>
                                                {/* Price */}
                                            </div>
                                        </div>
                                    ))}
                                  
                                    {/* Single item */}
                                    <hr className="my-4" />                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Products
                                            <span>$53.98</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>Gratis</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong>
                                                    <p className="mb-0">(including VAT)</p>
                                                </strong>
                                            </div>
                                            <span>
                                                <strong>$53.98</strong>
                                            </span>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn btn-primary btn-lg btn-block">
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p>
                                        <strong>Giao hàng đến</strong>
                                    </p>
                                    <blockquote>
                                        Nguyễn Văn A | <span>0905.451.778</span>
                                    </blockquote>
                                    <p>352 Trần Hưng Đạo Hải Châu Đà Nẵng</p>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body">
                                    <p>
                                        <strong>We accept</strong>
                                    </p>
                                    <img
                                        className="me-2"
                                        height="25px"
                                        width="55px"
                                        src="data:image/png;base64,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"
                                        alt="Mastercard"
                                    />
                                    <img
                                        className="me-2"
                                        height="p-0"
                                        width="55px"
                                        src="data:image/png;base64,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"
                                        alt="PayPal acceptance mark"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
        </div>
    );
}

export default Cart;