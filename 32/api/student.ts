import { Student } from "@/types";
import instance from "./instance"

export const getStudents = async () => {
    try {
        const res = await instance.get<Student[]>('/students');
        return res.data;
    } catch (err) {
        alert("Failed to fetch students!");
    }
}

export const createStudent = async (student: Student) => {
    try{
        const res = await instance.post('/students', student)
        return res.data
    } catch(err){
        alert("Failed to create Student!")
    }
}

export const updateStudent = async (student: Student) => {
    try{
        const res = await instance.put(`/students/${student.id}`, student)
        return res.data
    } catch(err){
        alert("Failed to update Student!")
    }
}

export const deleteStudent = async (id: string | number) => {
    try{
        const res = await instance.delete(`/students/${id}`)
        return res.data
    } catch(err){
        alert("Failed to delete Student!")
    }
}