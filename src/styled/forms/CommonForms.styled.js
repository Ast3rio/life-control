import styled from 'styled-components'
import {colors} from "../stylesVariables";

export const FormsLabel = styled.label`

`

export const InputStyles = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  background-color: ${colors.bgWhite};
  margin: 10px 0;
  transition: all .3s;
  &:hover, &:focus{
    border: 1px solid ${colors.mainColor};
  }
`
