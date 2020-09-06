import React from 'react'
import styled from 'styled-components'

 const StyledWrapper = styled.div`
 padding: 1.5em;
 max-width: 1366px;
 margin: 0 auto;
`

const Wrapper = ({ primary, children }) => {
  return (
    <StyledWrapper primary={primary} >
      {children}
    </StyledWrapper>
  )
}

export default Wrapper