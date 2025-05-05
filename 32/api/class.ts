import { Class } from "@/types";
import instance from "./instance"

export const getClasses = async () => {
    try {
        const res = await instance.get<Class[]>('/classes');
        return res.data;
    } catch(e) {
        alert("Failed to fetch Classs!");
    }
}

export const createClass = async (classes: Class) => {
    try{
        const res = await instance.post('/classes', classes)
        return res.data
    } catch(err){
        alert("Failed to create Class!")
    }
}

export const updateClass = async (classes: Class) => {
    try{
        const res = await instance.put(`/classes/${classes.id}`, classes)
        return res.data
    } catch(err){
        alert("Failed to update Class!")
    }
}

export const deleteClass = async (id: string | number) => {
    try{
        const res = await instance.delete(`/classes/${id}`)
        return res.data
    } catch(err){
        alert("Failed to delete Class!")
    }
}