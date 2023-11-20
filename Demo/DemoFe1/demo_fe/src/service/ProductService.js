import axios from "axios";

export const getListProduct = async (sort, otherSort, search, value, page,size) => {
    try {
        const result = (await axios.get(`http://localhost:8080/api/admin/business/products/list?sort=${sort}&search=${search}&value=${value}&page=${page}&otherSort=${otherSort}&size=${size}`)).data
        console.log(result)
        return result;
    } catch (error) {
        console.log(error)
    }
}
export const getList = async () => {
    try {
        const result = (await axios.get(`http://localhost:8080/api/admin/business/products/listProduct`)).data
        console.log(result)
        return result;
    } catch (error) {
        console.log(error)
    }
}

export const getProductById = async (idProduct) => {
    try {
        const result = (await axios.get(`http://localhost:8080/api/admin/business/products/${idProduct}`))
        console.log(result)
        return result;
    } catch (error) {
        console.log(error)
    }
}