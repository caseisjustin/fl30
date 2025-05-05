import React, { useState } from 'react'
import TeachersTable from './components/TeachersTable'
import { AddClassButton, TeachersPageWrapper } from './Teachers.style'
import TeacherModal from './components/TeachersModal'

const Teachers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <TeachersPageWrapper>
      <h1>Teachers</h1>
      <AddClassButton onClick={() => setIsModalOpen(true)}>Add Teacher</AddClassButton>
      <TeachersTable />
      {isModalOpen && (<TeacherModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />)}
    </TeachersPageWrapper>
  )
}

export default Teachers