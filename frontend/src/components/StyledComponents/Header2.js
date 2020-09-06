import React from 'react'
import styled from 'styled-components'

 const StyledHeader2 = styled.h2`
 font-family: "Montserrat";
 font-weight: bold;
 font-size: 1.5em;
 color: #101c26;
`

const Header2 = ({ primary, children }) => {
  return (
    <StyledHeader2 primary={primary} >
      {children}
    </StyledHeader2>
  )
}

export default Header2