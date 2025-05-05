import React, { useState } from 'react'
import SchoolInfosTable from './components/SchoolInfosTable'
import { AddClassButton, SchoolInfosPageWrapper } from './SchoolInfos.style'
import SchoolInfoModal from './components/SchoolInfoModal'

const SchoolInfos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <SchoolInfosPageWrapper>
      <h1>SchoolInfos</h1>
      <AddClassButton onClick={() => setIsModalOpen(true)}>Add School</AddClassButton>
      <SchoolInfosTable />
      {isModalOpen && (<SchoolInfoModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />)}
    </SchoolInfosPageWrapper>
  )
}

export default SchoolInfos