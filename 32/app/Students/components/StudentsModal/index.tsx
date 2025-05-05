import React, { useState, useEffect } from 'react'
import { createStudent, updateStudent } from '@/api/student'
import { Student } from '@/types'
import { Button, ModalActions, ModalContent } from './StudentsModal.style'

interface Props {
  open: boolean
  onClose: () => void
  initialData?: Student | null
  onSuccess?: () => void
}

const StudentModal = ({ open, onClose, initialData, onSuccess }: Props) => {
  const [form, setForm] = useState<Omit<Student, 'id'> & { id?: string | number }>({
    firstName: '',
    lastName: "",
    birthDate: "",
    classId: ''
  })

  useEffect(() => {
    if (initialData) {
      setForm(initialData)
    } else {
      setForm({ firstName: '', lastName: "", birthDate: "", classId: '' })
    }
  }, [initialData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (initialData) {
      await updateStudent(form as Student)
    } else {
      await createStudent(form as Student)
    }
    onSuccess?.()
    onClose()
  }

  return (
    <div className='modal-overlay' >
      <ModalContent>
        <input name="firstName" placeholder="FirstName" value={form.firstName} onChange={handleChange} />
        <input name="lastName" placeholder="LastName" value={form.lastName} onChange={handleChange} />
        <input name="birthDate" placeholder="BirthData" value={form.birthDate} onChange={handleChange} />
        <input name="classId" placeholder="Class" value={form.classId} onChange={handleChange} />
        <ModalActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button  onClick={handleSubmit}>{initialData ? 'Update' : 'Create'}</Button>
        </ModalActions>
      </ModalContent>
    </div>
  )
}

export default StudentModal
