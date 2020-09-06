import React from 'react'
import styled from 'styled-components'

 const StyledHeader1 = styled.h1`
 margin-top: 0;
 color: #162840;
`

const Header1 = ({ primary, children }) => {
  return (
    <StyledHeader1 primary={primary} >
      {children}
    </StyledHeader1>
  )
}


export default Header1