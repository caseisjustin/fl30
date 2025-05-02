import React from 'react'
import SchoolInfosTable from './components/SchoolInfosTable'
import { SchoolInfosPageWrapper } from './SchoolInfos.style'

const SchoolInfos = () => {
  return (
    <SchoolInfosPageWrapper>
      <h1>SchoolInfos</h1>
      <SchoolInfosTable />
    </SchoolInfosPageWrapper>
  )
}

export default SchoolInfos