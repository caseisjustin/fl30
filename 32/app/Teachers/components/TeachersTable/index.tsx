import { Table } from '@/components'
import React from 'react'
import { teacherTableCols } from './columns'
import { useTeachers } from '@/hooks'

const TeachersTable = () => {
    const { data: teachers } = useTeachers();

    return (
        <div>
            <Table
                columns={teacherTableCols}
                dataSrc={teachers}
                loading={false}
            />
        </div>
    )
}

export default TeachersTable