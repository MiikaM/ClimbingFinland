import React from 'react'
import styled from 'styled-components'

 const StyledALink = styled.a`
 color: #f8f8f8;
 text-decoration: none;
`

const ALink = ({ primary, children }) => {
  return (
    <StyledALink primary={primary} >
      {children}
    </StyledALink>
  )
}

export default ALink