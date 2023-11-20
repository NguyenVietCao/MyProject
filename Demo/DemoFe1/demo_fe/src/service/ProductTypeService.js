import axios from "axios";


export const getListProductType = async () => {
    try {
        const result = (await axios.get(`http://localhost:8080/api/admin/business/type/list`)).data
        console.log(result)
        return result;
    } catch (error) {
        console.log(error)
    }
}