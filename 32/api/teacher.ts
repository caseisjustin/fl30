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

export const createTeacher = async (student: Teacher) => {
    try{
        const res = await instance.post('/teachers', student)
        return res.data
    } catch(err){
        alert("Failed to create Teacher!")
    }
}

export const updateTeacher = async (student: Teacher) => {
    try{
        const res = await instance.put(`/teachers/${student.id}`, student)
        return res.data
    } catch(err){
        alert("Failed to update Teacher!")
    }
}

export const deleteTeacher = async (id: string | number) => {
    try{
        const res = await instance.delete(`/teachers/${id}`)
        return res.data
    } catch(err){
        alert("Failed to delete Teacher!")
    }
}