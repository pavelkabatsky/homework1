import styled from "styled-components";

type StyledButtonPropsType = {
  
}

export const StyledButton = styled.button`
  padding: 4px 20px;
  border: 2px solid #4e71fe;
  color:#4e71fe;
  background-color: transparent;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 700;
  margin-right: 12px;

  &:hover {
    background-color: #4e71fe;
    color: #fff;
    transition: 0.3s ease;
  }

  &:last-child {
    margin-right:0;
  }

`;
