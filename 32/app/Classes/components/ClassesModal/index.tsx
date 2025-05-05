import React, { useState, useEffect } from 'react'
import { createClass, updateClass } from '@/api/class'
import { Class } from '@/types'
import { Button, ModalActions, ModalContent, ModalWrapper } from './ClassesModal.style'

interface Props {
    open: boolean
    onClose: () => void
    initialData?: Class | null
    onSuccess?: () => void
}

const ClassModal = ({ open, onClose, initialData, onSuccess }: Props) => {
    const [form, setForm] = useState<Omit<Class, 'id'> & { id?: string | number }>({
        name: "",
    studentCount: 0,
    teacherId: 0
    })

    useEffect(() => {
        if (initialData) {
            setForm(initialData)
        } else {
            setForm({ name: '', studentCount: 0, teacherId: 0 })
        }
    }, [initialData])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async () => {
        if (initialData) {
            await updateClass(form as Class)
        } else {
            await createClass(form as Class)
        }
        onSuccess?.()
        onClose()
    }

    return (
        <ModalWrapper>
            <ModalContent>
                <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
                <input name="studentCount" placeholder="Student's amount" value={form.studentCount} onChange={handleChange} />
                <input name="teacherId" placeholder="Teacher ID" value={form.teacherId} onChange={handleChange} />
                <ModalActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>{initialData ? 'Update' : 'Create'}</Button>
                </ModalActions>
            </ModalContent>
        </ModalWrapper>
    )
}

export default ClassModal
