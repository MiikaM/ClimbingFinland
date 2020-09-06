import React from 'react'
import styled, { css } from 'styled-components'

const SearchInput = styled.p`
font-family: "Montserrat";
margin: 0 0 0 2em;
border: 1px;
border-style: solid;
border-color: map-get($main_colors, secondary);
border-radius: 30px;
padding: 0.5rem 0.5rem 0.5rem 0;
width: 80%;
padding-left: 8%;
max-width: 400px;
${({ primary }) =>
    primary && css`
visibility: ${({ visibility }) => visibility}`}
`

const SearchIcon = styled.img`
margin: 1rem;
margin-top: 0.9em;
margin-left: 9em;
padding-left: 1px;
position: absolute;
cursor: pointer;
opacity: 50%;
${({ primary }) =>
    primary && css`
visibility: ${({ visibility }) => visibility}`}
`

const SearchContainer = styled.div`
text-align: center;
${({ primary }) =>
    primary && css`
visibility: ${({ visibility }) => visibility}`}
`

const NavSearch = ({ primary, visibility, children }) => {
  return (
    <SearchContainer primary={primary} visibility={visibility}>
      {children}
      <SearchIcon visibility={visibility} />
      <SearchInput visibility={visibility} />
    </SearchContainer>
  )
}

export default NavSearch