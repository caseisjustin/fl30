import React, { useState, useEffect } from 'react'
import { createSchoolInfo, updateSchoolInfo } from '@/api/schoolInfo'
import { SchoolInfo } from '@/types'
import { Button, ModalActions, ModalContent } from './SchoolInfosModal.style'

interface Props {
    open: boolean
    onClose: () => void
    initialData?: SchoolInfo | null
    onSuccess?: () => void
}

const SchoolInfoModal = ({ open, onClose, initialData, onSuccess }: Props) => {
    const [form, setForm] = useState<Omit<SchoolInfo, 'id'> & { id?: string | number }>({
        name: "",
        location: "",
        overallStudentCount: 0,
        overallStaffCount: 0,
        overallClassCount: 0,
        about: "",
        phoneNumber: ""
    })

    useEffect(() => {
        if (initialData) {
            setForm(initialData)
        } else {
            setForm({ name: '', location: "", overallStudentCount: 0, overallStaffCount: 0, overallClassCount: 0, about: "", phoneNumber: "" })
        }
    }, [initialData])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        if (initialData) {
            await updateSchoolInfo(form as SchoolInfo)
        } else {
            await createSchoolInfo(form as SchoolInfo)
        }
        onSuccess?.()
        onClose()
    }

    return (
        <div className='modal-overlay' >
            <ModalContent>
                <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
                <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
                <input name="overallStudentCount" placeholder="Overall Student Count" value={form.overallStudentCount} onChange={handleChange} />
                <input name="overallStaffCount" placeholder="Overall Staff Count" value={form.overallStaffCount} onChange={handleChange} />
                <input name="overallClassCount" placeholder="Overall Class Count" value={form.overallClassCount} onChange={handleChange} />
                <input name="about" placeholder="Description" value={form.about} onChange={handleChange} />
                <input name="phoneNumber" placeholder="Phone:" value={form.phoneNumber} onChange={handleChange} />
                <ModalActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>{initialData ? 'Update' : 'Create'}</Button>
                </ModalActions>
            </ModalContent>
        </div>
    )
}

export default SchoolInfoModal
