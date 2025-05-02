import { Table } from '@/components'
import React from 'react'
import { schoolTableCols } from './columns'
import { useSchoolInfos } from '@/hooks'

const SchoolInfosTable = () => {
    const { data: school } = useSchoolInfos();

    return (
        <div>
            <Table
                columns={schoolTableCols}
                dataSrc={school}
                loading={false}
            />
        </div>
    )
}

export default SchoolInfosTable