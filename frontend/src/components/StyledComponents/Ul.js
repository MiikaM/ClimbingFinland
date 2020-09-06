import React from 'react'
import styled from 'styled-components'

const StyledUl = styled.ul`
 list-style: none;
 margin: 0;
 padding: 0;
`

const Ul = ({ primary, children }) => {
  return (
    <StyledUl primary={primary} >
      {children}
    </StyledUl>
  )
}
export default Ul