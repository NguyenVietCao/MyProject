import axios from "axios";

export const addCartDetail = async (id, userName) => {
    try {
        const result = (await axios.post(`http://localhost:8080/api/admin/cart/cartDetail/${id}?userName=${userName}`) )
        console.log(result)
        return result;
    } catch (error) {
        console.log(error)
    }
}

export const getCartDetail = async (idUser) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/admin/cart/`+idUser)
        console.log(result)
        return result;
    } catch (error) {
        console.log(error)
    }
}