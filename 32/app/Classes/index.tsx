import React, { useState } from 'react'
import ClassesTable from './components/ClassesTable'
import { AddClassButton, ClassesPageWrapper } from './Classes.style'
import ClassModal from './components/ClassesModal'

const Classes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <ClassesPageWrapper>
      <h1>Classes</h1>
      <AddClassButton onClick={() => setIsModalOpen(true)}>Add Class</AddClassButton>
      <ClassesTable />
      {isModalOpen && (<ClassModal open={isModalOpen} onClose={() => setIsModalOpen(false)}/>)}
    </ClassesPageWrapper>
  )
}

export default Classes