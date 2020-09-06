import React from 'react'
import styled from 'styled-components'

const StyledStrong = styled.strong`
 font-family: "Montserrat";
 font-size: 1.5em;
 font-weight: 500;
 color: #162840;
`

const Strong = ({ primary, children }) => {

  return (
    <StyledStrong primary={primary} >
      {children}
    </StyledStrong>
  )
}

export default Strong