import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height : 60px;
`

const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    align-items: center;
    justify-content: space-between;
    background-color: green;
    color: white;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <MenuItem>LAPTOP</MenuItem>
        <MenuItem>MONITOR</MenuItem>
        <MenuItem>KEYBOARD</MenuItem>
        <MenuItem>MOUSE</MenuItem>
        <MenuItem>HEADPHONE</MenuItem>
      </Wrapper>
    </Container>
  )
}

export default Navbar