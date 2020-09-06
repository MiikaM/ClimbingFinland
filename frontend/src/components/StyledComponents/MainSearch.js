import React from 'react'
import styled from 'styled-components'

const SearchInput = styled.p`
font-family: "Montserrat";
margin: 0 0 0 2em;
border: 1px;
border-style: solid;
border-color: map-get($main_colors, secondary);
border-radius: 30px;
padding: 0.5rem 0.5rem 0.5rem 0;
width: 80%;
padding-left: 7%;
max-width: 400px;
`

const SearchIcon = styled.img`
margin: 0.5rem;
margin-left: 2.2rem;
position: absolute;
cursor: pointer;
opacity: 50%;
`

const SearchContainer = styled.div`
text-align: center;
` 

const MainSearch = ({ primary, children }) => {
  return (
    <SearchContainer primary={primary} >
      {children}
      <SearchIcon />
      <SearchInput />
    </SearchContainer>
  )
}

export default MainSearch