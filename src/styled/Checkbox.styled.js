import styled from 'styled-components'
import {colors} from "./stylesVariables";

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.mainColor};
  border-radius: 50%;
  padding: 2px;
  margin: 0 5px 0 10px;
  cursor: pointer;
  input{
    width: 100%;
    height: 100%;
    border: none;
    opacity: 0;
    cursor: pointer;
  }
`

export const CheckboxElement = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${props => props.type === props.status && colors.mainColor};
`
