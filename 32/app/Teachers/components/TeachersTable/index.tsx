import { Table } from '@/components'
import React, { useState } from 'react'
import { teacherTableCols } from './columns'
import { useTeachers } from '@/hooks'
import { Teacher } from '@/types'
import { deleteTeacher } from '@/api'
import TeacherModal from '../TeachersModal'
import { ActionButton, DeleteButton, EditButton } from './TeachersTable.style'

const TeachersTable = () => {
    const { data: teachers, isLoading, refetch } = useTeachers();
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleEdit = (teacher: Teacher) => {
        setSelectedTeacher(teacher)
        setIsModalOpen(true)
    }

    const handleDelete = async (id: string | number) => {
        if (confirm('Are you sure?')) {
            await deleteTeacher(id)
            refetch()
        }
    }

    const handleSuccess = () => {
        refetch()
        setIsModalOpen(false)
        setSelectedTeacher(null)
    }

    const actionColumn = {
        title: 'Actions',
        dataIndex: 'actions',
    }
    const columns = [...teacherTableCols, actionColumn]

    const dataWithActions = teachers?.map((teacher) => ({
        ...teacher,
        actions: (
            <div className="flex space-x-2">
                <EditButton onClick={() => handleEdit(teacher)}>Edit</EditButton>
                <DeleteButton onClick={() => handleDelete(teacher.id)}>Delete</DeleteButton>
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
                <TeacherModal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    initialData={selectedTeacher}
                    onSuccess={handleSuccess}
                />
            )}
        </div>
    )
}

export default TeachersTable