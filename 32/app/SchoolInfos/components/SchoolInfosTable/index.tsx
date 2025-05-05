import { Table } from '@/components'
import React, { useState } from 'react'
import { schoolInfoTableCols } from './columns'
import { useSchoolInfos } from '@/hooks'
import { SchoolInfo } from '@/types'
import { deleteSchoolInfo } from '@/api'
import SchoolInfoModal from '../SchoolInfoModal'
import { ActionButton, ButtonWrapper, DeleteButton, EditButton } from './SchoolInfosTable.style'

const SchoolInfosTable = () => {
    const { data: schoolInfos, isLoading, refetch } = useSchoolInfos();
    const [selectedSchoolInfo, setSelectedSchoolInfo] = useState<SchoolInfo | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleEdit = (schoolInfo: SchoolInfo) => {
        setSelectedSchoolInfo(schoolInfo)
        setIsModalOpen(true)
    }

    const handleDelete = async (id: string | number) => {
        if (confirm('Are you sure?')) {
            await deleteSchoolInfo(id)
            refetch()
        }
    }

    const handleSuccess = () => {
        refetch()
        setIsModalOpen(false)
        setSelectedSchoolInfo(null)
    }

    const actionColumn = {
        title: 'Actions',
        dataIndex: 'actions',
    }
    const columns = [...schoolInfoTableCols, actionColumn]

    const dataWithActions = schoolInfos?.map((schoolInfo) => ({
        ...schoolInfo,
        actions: (
            <ButtonWrapper className="flex space-x-2">
                <EditButton onClick={() => handleEdit(schoolInfo)}>Edit</EditButton>
                <DeleteButton onClick={() => handleDelete(schoolInfo.id)}>Delete</DeleteButton>
            </ButtonWrapper>
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
                <SchoolInfoModal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    initialData={selectedSchoolInfo}
                    onSuccess={handleSuccess}
                />
            )}
        </div>
    )
}

export default SchoolInfosTable