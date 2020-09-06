import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
 background-size: cover;
 background-position: 50% 45%;
 border-radius: 10px;
 opacity: 85%;
`

const HeaderWrapper = ({ primary, bg, children }) => {
  return (
    <StyledHeader primary={primary} bg={bg}>
      {children}
    </StyledHeader>
  )
}

export default HeaderWrapper