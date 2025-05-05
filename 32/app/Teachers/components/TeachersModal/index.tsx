import React, { useState, useEffect } from 'react'
import { createTeacher, updateTeacher } from '@/api/teacher'
import { Teacher } from '@/types'
import { Button, ModalActions, ModalContent } from './TeachersModal.style'

interface Props {
    open: boolean
    onClose: () => void
    initialData?: Teacher | null
    onSuccess?: () => void
}

const TeacherModal = ({ open, onClose, initialData, onSuccess }: Props) => {
    const [form, setForm] = useState<Omit<Teacher, 'id'> & { id?: string | number }>({
        firstName: '',
        lastName: "",
        birthDate: "",
        classes: [],
    })

    useEffect(() => {
        if (initialData) {
            setForm(initialData)
        } else {
            setForm({ firstName: '', lastName: "", birthDate: "", classes: [] })
        }
    }, [initialData])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "classes"){
            setForm({ ...form, classes: [e.target.value.split(',').toString()] })

        }
        else{
            setForm({ ...form, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit = async () => {
        if (initialData) {
            await updateTeacher(form as Teacher)
        } else {
            await createTeacher(form as Teacher)
        }
        onSuccess?.()
        onClose()
    }

    return (
        <div className='modal-overlay' >
            <ModalContent>
                <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
                <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
                <input name="birthDate" placeholder="BirthData" value={form.birthDate} onChange={handleChange} />
                <input name="classes" placeholder="Class IDs (comma-separated)"
                    value={form.classes.join(',')}
                    onChange={handleChange} />
                <ModalActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>{initialData ? 'Update' : 'Create'}</Button>
                </ModalActions>
            </ModalContent>
        </div>
    )
}

export default TeacherModal
