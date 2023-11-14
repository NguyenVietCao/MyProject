import axios from "axios";
import { useReducer } from "react";
import jwt_decode from "jwt-decode";


const apiAccount = "http://localhost:8080/api/user";
const apiAuth = "http://localhost:8080/api/v1/auth/signin";


export const edit = async (data) => {
    return await axios.put(apiAccount + `/information/edit`, data);
}

export const changePass = async (data) => {
    return await axios.put(apiAccount + `/register`, data);
}

export const findById = async (id) => {
    return await axios.get(apiAccount + `/information/${id}`);
}

export const signup = async (user) => {
    const res = await axios.post('http://localhost:8080/api/v1/auth/signup', user);
    return res
}

export const login = async (data) => {
   
    try {
        console.log(data);
        const dataLogin = await axios.post("http://localhost:8080/api/v1/auth/signin", data);
        return dataLogin.data;
    } catch (err) {
        console.log(err);
    }
}
