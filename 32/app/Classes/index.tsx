import React from 'react'
import ClassesTable from './components/ClassesTable'
import { ClassesPageWrapper } from './Classes.style'

const Classes = () => {
  return (
    <ClassesPageWrapper>
      <h1>Classes</h1>
      <ClassesTable />
    </ClassesPageWrapper>
  )
}

export default Classes