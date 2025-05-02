import { Teacher } from "@/types";
import instance from "./instance"

export const getTeachers = async () => {
    try {
        const res = await instance.get<Teacher[]>('/teachers');
        return res.data;
    } catch(e) {
        alert("Failed to fetch Teachers!");
    }
}