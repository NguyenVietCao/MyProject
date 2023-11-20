import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../service/ProductService';

function Detail(props) {
    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    const param = useParams()
    const [product, setProduct] = useState()
    const showProduct = async () => {
        const data = await getProductById(param.id)
        console.log(data);
        setProduct(data.data)
    }

    useEffect(() => {
        showProduct()
    }, [param.id])
    

    return (
        <div>
            
            <div className="row d-flex my-5">
                {/* Image */}
                <div className="col-5" data-mdb-ripple-color="light">
                    <img
                        src={product?.images}
                        className="w-100"
                        alt="Blue Jeans Jacket"
                    />
                </div>
                {/* Image */}
                <div className="col-7 justify-content-between p-5">
                    {/* Data */}
                    <p>
                        <strong>{product?.description}</strong>
                    </p>
                    <p>Dung lượng: {product?.capacity}</p>
                    <p>Đơn vị: {product?.unit}</p>
                    <p>Xuất xứ: Úc</p>
                    <p>Đơn giá: {vnd.format(product?.price)}</p>
                    <p>
                        Danh mục:<span style={{ color: "blue" }}> {product?.productType.productTypeName}</span>
                    </p>
                    <p>
                        Tình trạng:<span style={{ color: "green" }}> Còn hàng</span>
                    </p>
                    <img
                        width="90px"
                        src="https://media.istockphoto.com/id/1140391316/vi/vec-to/x%E1%BA%BFp-h%E1%BA%A1ng-s%E1%BA%A3n-ph%E1%BA%A9m-kh%C3%A1ch-h%C3%A0ng-n%C4%83m-sao-v%C3%A0ng-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-fow-%E1%BB%A9ng-d%E1%BB%A5ng-web-v%C3%A0-trang-web.jpg?s=1024x1024&w=is&k=20&c=MTvgd65YHYRtsewu2itPfJ4i9_Ic8LGOg9emWeiYOwg="
                    />{" "}
                    <br />
                    <button
                        type="button"
                        className="btn btn-primary btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                    >
                        Thêm vào giỏ hàng
                    </button>
                    <br />
                    <button
                        type="button"
                        className="btn btn-danger btn-sm mb-2"
                        data-mdb-toggle="tooltip"
                        title="Move to the wish list"
                    >
                        Mua ngay
                    </button>
                    <div className="d-flex mb-4 " style={{ maxWidth: 300 }}>
                        <button
                            className="btn btn-primary  me-2 h-25"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        >
                            <i className="fas fa-minus" />
                        </button>
                        <input
                            id="form1"
                            min={0}
                            name="quantity"
                            defaultValue={1}
                            type="number"
                            className="form-control w-25"
                        />
                        {/* <label class="form-label" for="form1">Quantity</label> */}
                        <button
                            className="btn btn-primary ms-2  h-25"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        >
                            <i className="fas fa-plus" />
                        </button>
                    </div>
                    {/* Data */}
                </div>
            </div>

        </div>
    );
}

export default Detail;