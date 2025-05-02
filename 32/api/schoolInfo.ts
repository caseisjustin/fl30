import { SchoolInfo } from "@/types";
import instance from "./instance"

export const getSchoolInfos = async () => {
    try {
        const res = await instance.get<SchoolInfo[]>('/SchoolInfos');
        return res.data;
    } catch(e) {
        alert("Failed to fetch SchoolInfos!");
    }
}