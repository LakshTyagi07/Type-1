import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Wrapper } from "../styles/base"
import { MoonIcon, SunIcon } from "./Icons"

const FooterView = styled.footer`
  padding: 24px;
  background-color: #fafafa;
`

const FooterWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Copyright = styled.div`
  opacity: 0.5;
`

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 48px;
`

const FooterLink = styled(Link)`
  opacity: 0.6;
  transition: all 200ms ease-in-out;
  &.active {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
`

export default function ({ theme, toggleTheme }) {
  return (
    <FooterView>
      <FooterWrapper>
        <Copyright>© Type 1 {new Date().getFullYear()}.</Copyright>
        <FooterLinks>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/privacy">Privacy</FooterLink>
        </FooterLinks>
      </FooterWrapper>
    </FooterView>
  )
}
