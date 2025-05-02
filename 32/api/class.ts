import { Class } from "@/types";
import instance from "./instance"

export const getClasses = async () => {
    try {
        const res = await instance.get<Class[]>('/Classs');
        return res.data;
    } catch(e) {
        alert("Failed to fetch Classs!");
    }
}