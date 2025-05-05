import { SchoolInfo } from "@/types";
import instance from "./instance"

export const getSchoolInfos = async () => {
    try {
        const res = await instance.get<SchoolInfo[]>('/school');
        return res.data;
    } catch(e) {
        alert("Failed to fetch SchoolInfos!");
    }
}

export const createSchoolInfo = async (school: SchoolInfo) => {
    try{
        const res = await instance.post('/school', school)
        return res.data
    } catch(err){
        alert("Failed to create SchoolInfo!")
    }
}

export const updateSchoolInfo = async (school: SchoolInfo) => {
    try{
        const res = await instance.put(`/school/${school.id}`, school)
        return res.data
    } catch(err){
        alert("Failed to update SchoolInfo!")
    }
}

export const deleteSchoolInfo = async (id: string | number) => {
    try{
        const res = await instance.delete(`/school/${id}`)
        return res.data
    } catch(err){
        alert("Failed to delete SchoolInfo!")
    }
}