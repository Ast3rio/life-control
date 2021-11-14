import styled from 'styled-components'
import {filters} from "./stylesVariables";

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all .3s;
  cursor: pointer;
  filter: ${(props) => {
    switch (props.filter) {
        case ('main'): {
            return filters.green
        }
        case ('red'): {
            return filters.red
        }
        default: return ''
    }   
  }};
`
