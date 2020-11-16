import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Logo } from "../components/Icons"
import { Wrapper } from "../styles/base"

const Nav = styled.nav`
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.backgroundColor};
`

const NavWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 48px;
`

const NavLink = styled(Link)`
  opacity: 0.6;
  transition: all 200ms ease-in-out;
  &.active {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
`

export default function () {
  return (
    <Nav>
      <NavWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <NavLinks>
          <NavLink activeClassName="active" to="/features">
            Features
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </NavLinks>
      </NavWrapper>
    </Nav>
  )
}
