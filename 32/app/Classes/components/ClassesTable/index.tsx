import { Table } from '@/components'
import React from 'react'
import { classTableCols } from './columns'
import { useClasses } from '@/hooks'

const ClassesTable = () => {
    const { data: users } = useClasses();

    return (
        <div>
            <Table
                columns={classTableCols}
                dataSrc={users}
            />
        </div>
    )
}

export default ClassesTable