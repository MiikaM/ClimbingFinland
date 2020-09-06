import React from 'react'
import styled from 'styled-components'

 const StyledParagraph = styled.p`
font-family: Roboto;
font-weight: bold;
color: #101c26;
font-size: 1em
`

const Paragraph = ({ primary, children }) => {
  return (
    <StyledParagraph primary={primary} >
      {children}
    </StyledParagraph>
  )
}

export default Paragraph