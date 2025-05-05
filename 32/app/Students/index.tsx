import React, { useState } from 'react'
import StudentsTable from './components/StudentsTable'
import { AddClassButton, StudentsPageWrapper } from './Students.style'
import StudentModal from './components/StudentsModal'

const Students = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <StudentsPageWrapper>
      <h1>Students</h1>
      <AddClassButton onClick={() => setIsModalOpen(true)}>Add Student</AddClassButton>
      <StudentsTable />
        {isModalOpen && (<StudentModal open={isModalOpen} onClose={() => setIsModalOpen(false)}/>)}
    </StudentsPageWrapper>
  )
}

export default Students