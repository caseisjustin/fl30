import { toast } from "react-toastify";
import instance from "./instance";

export const getCategoriesApi = async () => {
    try {
        const res = await instance.get("/categories");
        return res.data;
    } catch (err) {
        toast.error("Failed to fetch Categories!");
    }
};

export const getAllCategories = async () => {
    try {
        const res = await instance.get("/categories");
        return res.data;
    } catch (err) {
        toast.error("Failed to fetch Categories!");
    }
};
