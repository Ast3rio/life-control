import styled from 'styled-components'
import {colors} from "../stylesVariables";

export const AuthFormWrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  min-height: 400px;
  border: 1px solid ${colors.mainColor};
  border-radius: 20px;
  padding: 40px;
`
