import React from 'react'
import styled from 'styled-components'

const StyledBlockQuote = styled.blockquote`
font-family: Roboto;
font-weight: normal;
color: #142742;
font-size: 1em
`


const BlockQuote = ({ primary, children }) => {
  return (
    <StyledBlockQuote primary={primary} >
      {children}
    </StyledBlockQuote>
  )
}


export default BlockQuote