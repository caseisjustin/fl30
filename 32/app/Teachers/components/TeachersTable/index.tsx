import { Table } from '@/components'
import React from 'react'
import { teacherTableCols } from './columns'
import { useTeachers } from '@/hooks'

const TeachersTable = () => {
    const { data: users } = useTeachers();

    return (
        <div>
            <Table
                columns={teacherTableCols}
                dataSrc={users}
            />
        </div>
    )
}

export default TeachersTable