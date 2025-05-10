import { toast } from "react-toastify";
import instance from "./instance";


export const getAllProducts = async (params ={}) => {
    try {
        const res = await instance.get('/Products', {params});
        return res.data;
    } catch (err) {
        toast.error("Failed to fetch Products!");
    }
};

export const getProductsByCategory = async (params) => {
    try {
        const res = await instance.get(`/Products?category=${params.category}`);
        return res.data;
    } catch (e) {
        toast.error("Failed to fetch Products!");
    }
};

export const getSingleProduct = async (id) => {
    try {
        const res = await instance.get(`/Products/${id}`);
        return res.data;
    } catch (err) {
        toast.error("Failed to fetch Product!");
    }
};

export const searchProducts = async (query) => {
    try {
        const res = await instance.get(`/Products/search?q=${query}`);
        return res.data;
    } catch (err) {
        toast.error("Failed to search!");
    }
};
