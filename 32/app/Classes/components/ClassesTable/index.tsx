import { Table } from '@/components'
import React, { useState } from 'react'
import { classdataTableCols } from './columns'
import { useClasses } from '@/hooks'
import { Class } from '@/types'
import { deleteClass } from '@/api'
import ClassModal from '../ClassesModal'
import { DeleteButton, EditButton } from './ClassesTable.style'

const ClassesTable = () => {
    const { data: classdatas, isLoading, refetch } = useClasses();
    const [selectedClass, setSelectedClass] = useState<Class | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleEdit = (classdata: Class) => {
        setSelectedClass(classdata)
        setIsModalOpen(true)
    }

    const handleDelete = async (id: string | number) => {
        if (confirm('Are you sure?')) {
            await deleteClass(id)
            refetch()
        }
    }

    const handleSuccess = () => {
        refetch()
        setIsModalOpen(false)
        setSelectedClass(null)
    }

    const actionColumn = {
        title: 'Actions',
        dataIndex: 'actions',
    }
    const columns = [...classdataTableCols, actionColumn]

    const dataWithActions = classdatas?.map((classdata) => ({
        ...classdata,
        actions: (
            <div className="flex space-x-2">
                <EditButton onClick={() => handleEdit(classdata)}>Edit</EditButton>
                <DeleteButton onClick={() => handleDelete(classdata.id)}>Delete</DeleteButton>
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
                <ClassModal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    initialData={selectedClass}
                    onSuccess={handleSuccess}
                />
            )}
        </div>
    )
}

export default ClassesTable