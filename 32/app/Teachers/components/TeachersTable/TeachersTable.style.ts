import styled from 'styled-components'

export const ActionButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
`

export const EditButton = styled(ActionButton)`
  background-color: #4f46e5;
  color: white;

  &:hover {
    background-color: #4338ca;
  }
`

export const DeleteButton = styled(ActionButton)`
  background-color: #ef4444;
  color: white;

  &:hover {
    background-color: #dc2626;
  }
`
