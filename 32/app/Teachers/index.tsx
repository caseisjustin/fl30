import React from 'react'
import TeachersTable from './components/TeachersTable'
import { TablesPageWrapper } from './Tables.style'

const Teachers = () => {
  return (
    <TablesPageWrapper>
      <h1>Teachers</h1>
      <TeachersTable />
    </TablesPageWrapper>
  )
}

export default Teachers