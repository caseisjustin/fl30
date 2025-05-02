import React from 'react'
import StudentsTable from './components/StudentsTable'
import { StudentsPageWrapper } from './Students.style'

const Students = () => {
  return (
    <StudentsPageWrapper>
      <h1>Students</h1>
      <StudentsTable />
    </StudentsPageWrapper>
  )
}

export default Students