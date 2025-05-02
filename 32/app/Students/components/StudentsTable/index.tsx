import { Table } from '@/components'
import React from 'react'
import { studentTableCols } from './columns'
import { useStudents } from '@/hooks'

const StudentsTable = () => {
    const { data: students } = useStudents();

    return (
        <div>
            <Table
                columns={studentTableCols}
                dataSrc={students}
                loading={false}
            />
        </div>
    )
}

export default StudentsTable