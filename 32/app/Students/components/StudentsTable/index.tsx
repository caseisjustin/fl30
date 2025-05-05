import React, { useState } from 'react'
import { Table } from '@/components'
import { studentTableCols } from './columns'
import { useStudents } from '@/hooks'
import { Student } from '@/types'
import { deleteStudent } from '@/api'
import StudentModal from '../StudentsModal'
import { DeleteButton, EditButton } from './StudentsTable.style'

const StudentsTable = () => {
    const { data: students = [], isLoading, refetch } = useStudents();
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleEdit = (student: Student) => {
        setSelectedStudent(student)
        setIsModalOpen(true)
    }

    const handleDelete = async (id: string | number) => {
        if (confirm('Are you sure?')) {
            await deleteStudent(id)
            refetch()
        }
    }

    const handleSuccess = () => {
        refetch()
        setIsModalOpen(false)
        setSelectedStudent(null)
    }

    const actionColumn = {
        title: 'Actions',
        dataIndex: 'actions',
    }
    const columns = [...studentTableCols, actionColumn]

    const dataWithActions = students?.map((student) => ({
        ...student,
        actions: (
            <div className="flex space-x-2">
                <EditButton onClick={() => handleEdit(student)}>Edit</EditButton>
                <DeleteButton onClick={() => handleDelete(student.id)}>Delete</DeleteButton>
            </div>
        )
    }))

    return (
        <div>
            <Table
                columns={columns}
                dataSrc={dataWithActions}
                loading={isLoading}
            />
            {isModalOpen && (
                <StudentModal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    initialData={selectedStudent}
                    onSuccess={handleSuccess}
                />
            )}
        </div>
    )
}

export default StudentsTable