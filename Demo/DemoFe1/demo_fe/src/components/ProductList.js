import React, { useState } from 'react';

function ProductList(props) {
    const [products, setProduct] = useState([])
    const [sort, setSort] = useState()
    const [otherSort,setOtherSort] = useState()
    const [search, setSearch] = useState()
    const [value, setValue] = useState()
    
    return (
        <div>
            <>
               
                <div className="product-list-container" >
                    <div className="device-list">
                        {products.length > 0 ? products.map((item) => {
                            return (
                                <a className="device-card" href={'/detail/' + item.type + '/' + item.id}>
                                    {item.quantity == 0 &&
                                        <div className='soldout-part'>
                                            <img className='soldout-word' src='/images/chayhang-2.png' />
                                        </div>
                                    }
                                    <div className="card-image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <h3 className="product-name-on-list">{item.name + " " + item.capacity}</h3>
                                    <h2 className="product-price-on-list">{new Intl.NumberFormat("de-DE").format(item.price * 1.2)}đ</h2>
                                    <h4 className="line-through-price">{new Intl.NumberFormat("de-DE").format(item.price * 1.25)}đ</h4>
                                </a>
                            )
                        }) : <p className='no-products-found'>Không có sản phẩm</p>}

                    </div>
                </div >
            </>  
        </div>
    );
}

export default ProductList;