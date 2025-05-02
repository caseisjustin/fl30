import { Table } from '@/components'
import React from 'react'
import { classTableCols } from './columns'
import { useClasses } from '@/hooks'

const ClassesTable = () => {
    const { data: classes } = useClasses();

    return (
        <div>
            <Table
                columns={classTableCols}
                dataSrc={classes}
                loading={false}
            />
        </div>
    )
}

export default ClassesTable