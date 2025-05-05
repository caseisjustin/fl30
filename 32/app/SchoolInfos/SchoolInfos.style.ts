import styled from "styled-components";

export const SchoolInfosPageWrapper = styled.div`
    padding: 30px;
`

export const AddClassButton = styled.button`
  margin-bottom: 20px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #6D5DFB, #46C1F6);
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(109, 93, 251, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(70, 193, 246, 0.5);
    background: linear-gradient(135deg, #5a48f5, #33b4ed);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 3px 8px rgba(70, 193, 246, 0.3);
  }
`
